import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

import { KBHBuildTrackerImage } from '@models/db/KBHBuildTrackerImage';
import { KBHHistory } from '@models/db/KBHHistory';
import { LotSelectType } from '@models/Enums';

export const getDBConnection = async () => {
  return openDatabase({ name: 'KbHomeEmployeeData.db', location: 'default' });
};

enablePromise(true);

export const tableExists = async (
  db: SQLiteDatabase,
  tableName: string,
): Promise<boolean> => {
  const query = `SELECT name FROM sqlite_master WHERE type='table' AND name=?;`;
  const results = await db.executeSql(query, [tableName]);
  return results.length > 0 && results[0].rows.length > 0;
};

export const createKBHHistoryTable = async (db: SQLiteDatabase) => {
  const tableName = 'kbhHistory';
  const kbhHistoryColumns = `
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    CompanyCode VARCHAR(250),
    ProjectCode VARCHAR(250),
    Tract VARCHAR(250),
    Lot VARCHAR(250),
    LotSelectType INT,
    Address VARCHAR(2048),
    UploadDate DATETIME,
    UploadBy VARCHAR(2048)
  `;

  // Create the kbhHistory table if it does not exist
  const createKbhHistoryTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName}(${kbhHistoryColumns});`;
  await db.executeSql(createKbhHistoryTableQuery);

  console.log('Master table created successfully');
};

export const createBTImagesTable = async (db: SQLiteDatabase) => {
  const kbhBuildTrackerImagesTableName = 'kbhBuildTrackerImages';

  try {
    // Define the columns and create the kbhBuildTrackerImages table if it does not exist
    const kbhBuildTrackerImagesColumns = `
      KbImageId INTEGER PRIMARY KEY AUTOINCREMENT,
      ImagePath VARCHAR(2048),
      HistoryId VARCHAR(36),
      ImagePosition INT,
      CapturedBy VARCHAR(256),
      CapturedOn DATETIME,
      SyncStatus VARCHAR(256),
      RetryCount INT CHECK (RetryCount >= 0 AND RetryCount <= 5),
      SyncedOn DATETIME,
      Remarks VARCHAR(2048),
      FOREIGN KEY (HistoryId) REFERENCES kbhHistory(id)
    `;
    const createKbhBuildTrackerImagesTableQuery = `CREATE TABLE IF NOT EXISTS ${kbhBuildTrackerImagesTableName}(${kbhBuildTrackerImagesColumns});`;
    await db.executeSql(createKbhBuildTrackerImagesTableQuery);

    console.log('Child table created successfully');
  } catch (error) {
    console.error('Error creating child table and trigger:', error);
    throw error;
  }
};

export const saveKBHHistory = async (
  db: SQLiteDatabase,
  masterInfo: KBHHistory<null>,
): Promise<number> => {
  try {
    const masterInsertQuery = `
      INSERT INTO kbhHistory (
        CompanyCode,
        ProjectCode,
        Tract,
        Lot,
        LotSelectType,
        Address,
        UploadDate,
        UploadBy
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      masterInfo.CompanyCode,
      masterInfo.ProjectCode,
      masterInfo.Tract,
      masterInfo.Lot,
      masterInfo.LotSelectType,
      masterInfo.Address,
      masterInfo.UploadDate.toISOString(),
      masterInfo.UploadBy,
    ];

    await db.executeSql(masterInsertQuery, values);
    const result = await db.executeSql('SELECT last_insert_rowid() as id;');
    const insertId = result[0].rows.item(0).id;
    return insertId;
  } catch (error) {
    console.error('Error inserting master photo info:', error);
    throw error;
  }
};

export const saveKBHBTImage = async (
  db: SQLiteDatabase,
  childInfoArray: KBHBuildTrackerImage[],
) => {
  try {
    const childInsertQuery = `
      INSERT INTO kbhBuildTrackerImages (
        ImagePath,
        HistoryId,
        ImagePosition,
        CapturedBy,
        CapturedOn,
        SyncStatus,
        RetryCount,
        SyncedOn,
        Remarks
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    for (const childInfo of childInfoArray) {
      const values = [
        childInfo.ImagePath,
        null, // Set HistoryId to null
        childInfo.ImagePosition,
        childInfo.CapturedBy,
        childInfo.CapturedOn.toISOString(),
        childInfo.SyncStatus,
        childInfo.RetryCount,
        childInfo.SyncedOn.toISOString(),
        childInfo.Remarks,
      ];

      await db.executeSql(childInsertQuery, values);
    }

    console.log('Child photo info inserted successfully');
  } catch (error) {
    console.error('Error inserting child photo info:', error);
    throw error;
  }
};

export const getDraftBTImages = async (db: SQLiteDatabase) => {
  try {
    const query = `
      SELECT
        i.ImagePath
      FROM
        kbhBuildTrackerImages i
      LEFT JOIN
        kbhHistory h ON h.Id = i.HistoryId
      WHERE
        i.SyncStatus = 'Draft';
    `;
    const result = await db.executeSql(query); // Execute the query
    const rows = result[0].rows;
    const fetchedData = [];
    for (let i = 0; i < rows.length; i++) {
      fetchedData.push(rows.item(i).ImagePath); // Add only the ImagePath to the fetchedData array
    }
    return fetchedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// TODO: Need to pass the sync status
export const getDraftBTImagesCount = async (db: SQLiteDatabase) => {
  try {
    // Construct the SQL query to select images with SyncStatus = 'Draft'
    const sqlQuery = `SELECT COUNT(*) AS count FROM kbhBuildTrackerImages WHERE SyncStatus = 'Draft'`;

    // Execute the query
    const result = await db.executeSql(sqlQuery);

    // Check if the result is successful and has rows
    if (result.length > 0 && result[0].rows.length > 0) {
      // Access the count property from the first row of the result
      const count = result[0].rows.item(0).count;

      return count;
    } else {
      console.log('No draft images found or database query failed.');
      return 0;
    }
  } catch (error) {
    console.error('Error retrieving draft image count from database:', error);
    return 0;
  }
};

// TODO: Search with IDs instead of image paths
export const deleteBTImages = async (
  db: SQLiteDatabase,
  filePaths: string[],
) => {
  const placeholders = filePaths.map(() => '?').join(',');
  const deleteQuery = `
    DELETE FROM kbhBuildTrackerImages
    WHERE ImagePath IN (${placeholders});
  `;

  return new Promise<void>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        deleteQuery,
        filePaths,
        () => {
          console.log('Records deleted successfully');
          resolve();
        },
        error => {
          console.error('Error deleting records:', error);
          reject(error);
        },
      );
    });
  });
};

export const updateBTImageData = async (
  db: SQLiteDatabase,
  historyId: number,
) => {
  try {
    // Adjusted SQL query to also set SyncStatus to 'pending' if it was 'Draft'
    const updateQuery = `
      UPDATE kbhBuildTrackerImages
      SET HistoryId =?,
          SyncStatus = CASE WHEN SyncStatus = 'Draft' THEN 'Pending' ELSE SyncStatus END
      WHERE HistoryId IS NULL;
    `;
    await db.executeSql(updateQuery, [historyId]);
    console.log('Child photo info updated successfully');
  } catch (error) {
    console.error('Error updating child photo info:', error);
    throw error;
  }
};

export const getKBHHistoryWithId = async <Type extends KBHBuildTrackerImage>(
  db: SQLiteDatabase,
  historyId: number,
): Promise<KBHHistory<Type> | null> => {
  try {
    const result = await db.executeSql(
      `SELECT * FROM kbhHistory where Id = ${historyId} LIMIT 1`,
    );

    if (result && result[0].rows.length > 0) {
      const row = result[0].rows.item(0);
      const history = row as KBHHistory<Type>;
      history.data = [] as Type[];
      return history;
    }
  } catch (error) {
    console.error('Error fetching updated data:', error);
  }
  return null;
};

// TODO: Need to asign the lot select type based on the T
export const getAllKBHHistory = async <T extends KBHBuildTrackerImage>(
  db: SQLiteDatabase,
  lotSelectedType: LotSelectType,
): Promise<KBHHistory<T>[] | null> => {
  const kbhHistory = [] as KBHHistory<T>[];
  try {
    const result = await db.executeSql(
      `SELECT * FROM kbhHistory WHERE Id IS NOT NULL AND LotSelectType = '${lotSelectedType}'`,
    );

    if (result && result[0].rows.length > 0) {
      const rows = result[0].rows;
      for (let i = 0; i < rows.length; i++) {
        const history = rows.item(i) as KBHHistory<T>;
        history.data = [] as T[];
        kbhHistory.push(history);
      }
      return kbhHistory;
    }
  } catch (error) {
    console.error('Error fetching updated data:', error);
  }
  return null;
};

export const getBTHistoryAndImagesDataWithHistoryId = async (
  db: SQLiteDatabase,
  historyId: number,
): Promise<KBHHistory<KBHBuildTrackerImage> | null> => {
  try {
    const history = await getKBHHistoryWithId(db, historyId);
    if (history && history.data) {
      history.data = await getBTImagesWithHistoryId(db, historyId);
      return history;
    }
  } catch (error) {
    console.error('Error fetching updated data:', error);
  }
  return null;
};

export const getBTImagesWithHistoryId = async (
  db: SQLiteDatabase,
  historyId: number,
): Promise<KBHBuildTrackerImage[]> => {
  const btImages = [] as KBHBuildTrackerImage[];
  try {
    const result = await db.executeSql(
      `SELECT * FROM kbhBuildTrackerImages WHERE HistoryId IS NOT NULL AND HistoryId = ${historyId}`,
    );
    if (result && result[0] && result[0].rows.length > 0) {
      const rows = result[0].rows;
      for (let i = 0; i < rows.length; i++) {
        btImages.push(rows.item(i) as KBHBuildTrackerImage);
      }
      return btImages;
    }
  } catch (error) {
    console.error('Error fetching BT images with histoty data:', error);
  }
  return btImages;
};

export const geAllKBHHistoryData = async (
  db: SQLiteDatabase,
  lotSelectType: LotSelectType,
): Promise<KBHHistory<KBHBuildTrackerImage>[] | null> => {
  try {
    const kbhHistory = await getAllKBHHistory<KBHBuildTrackerImage>(
      db,
      lotSelectType,
    );
    if (kbhHistory) {
      for (const history of kbhHistory) {
        history.data = await getBTImagesWithHistoryId(db, history.Id);
      }
      return kbhHistory;
    }
  } catch (error) {
    console.error('Error fetching all updated data:', error);
  }
  return null;
};

export const verifyTableCreation = async (db: SQLiteDatabase) => {
  try {
    // Query to list all tables
    const listTablesQuery = `SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';`;
    const tablesResult = await db.executeSql(listTablesQuery);

    // Query to describe the kbhHistory table structure
    const describeKbhHistoryTableQuery = `PRAGMA table_info(kbhHistory);`;
    const kbhHistoryTableInfoResult = await db.executeSql(
      describeKbhHistoryTableQuery,
    );

    // Query to describe the kbhBuildTrackerImages table structure
    const describeKbhBuildTrackerImagesTableQuery = `PRAGMA table_info(kbhBuildTrackerImages);`;
    const kbhBuildTrackerImagesTableInfoResult = await db.executeSql(
      describeKbhBuildTrackerImagesTableQuery,
    );

    return {
      tables: tablesResult[0].rows.raw(),
      kbhHistoryTableInfo: kbhHistoryTableInfoResult[0].rows.raw(),
      kbhBuildTrackerImagesTableInfo:
        kbhBuildTrackerImagesTableInfoResult[0].rows.raw(),
    };
  } catch (error) {
    console.error('Error verifying table creation:', error);
    throw error;
  }
};
