import { LotSelectType } from '@models/Enums';

import { KBHBuildTrackerImage } from './KBHBuildTrackerImage';

export type KBHHistory<T extends KBHBuildTrackerImage | null> = {
  Id: number;
  CompanyCode: string;
  ProjectCode: string;
  Tract: string;
  Lot: string;
  LotSelectType: LotSelectType;
  UploadDate: Date;
  UploadBy: string;
  Address: string;
  data?: T[];
};
