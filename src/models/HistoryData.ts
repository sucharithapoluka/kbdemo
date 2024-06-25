import { ImageSourcePropType } from 'react-native';

import { SyncStatus } from './Enums';

export type HistoryData = {
  companyCode: string;
  projectCode: string;
  tractNumber: string;
  lotNumber: string;
  imageName: string;
  batchNo: number;
  imagePosition: string;
  capturedBy: string;
  capturedOn: Date;
  syncStatus: SyncStatus;
  retryCount: number;
  syncedOn: Date;
  remarks: string;
  message?: string;
  subject?: string;
  address: string;
  images?: ImageSourcePropType[];
  readStatus?: string;
};
