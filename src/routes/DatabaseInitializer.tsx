// DatabaseInitializer.js
import { useEffect } from 'react';

import {
  createBTImagesTable,
  createKBHHistoryTable,
  getDBConnection,
  tableExists,
  verifyTableCreation,
} from '@services/db/DbServices';

const DatabaseInitializer = () => {
  useEffect(() => {
    const initializeAndVerifyDatabase = async () => {
      const db = await getDBConnection();

      // Initialize tables if they don't exist
      const masterTableExists = await tableExists(db, 'kbhHistory');
      const childTableExists = await tableExists(db, 'kbhBuildTrackerImages');

      if (!masterTableExists) {
        await createKBHHistoryTable(db);
      }

      if (!childTableExists) {
        await createBTImagesTable(db);
      }

      // Verify table creation
      const verificationResult = await verifyTableCreation(db);
      console.log('Verification result:', verificationResult);

      console.log('Database and tables initialized and verified successfully');
    };

    initializeAndVerifyDatabase().catch(console.error);
  }, []);

  return null; // This component does not render anything
};

export default DatabaseInitializer;
