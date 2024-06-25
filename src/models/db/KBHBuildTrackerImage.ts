import { SyncStatus } from '@models/Enums';

export type KBHBuildTrackerImage = {
  HistoryId: number | null;
  ImagePath: string;
  ImagePosition: number;
  CapturedBy: string;
  CapturedOn: Date;
  SyncStatus: SyncStatus;
  RetryCount: number;
  SyncedOn: Date;
  Remarks: string;
};
