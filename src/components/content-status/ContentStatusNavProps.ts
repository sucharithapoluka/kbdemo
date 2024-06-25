import { KBHBuildTrackerImage } from '@models/db/KBHBuildTrackerImage';
import { KBHHistory } from '@models/db/KBHHistory';
import { LotSelectType } from '@models/Enums';

export type ContentStatusNavProps = {
  photoHistory: KBHHistory<KBHBuildTrackerImage>;
  lotSelectedType: LotSelectType;
  hasStatusPending?: boolean;
  // images: KBHBuildTrackerImage[]; // Add the images propert
};
