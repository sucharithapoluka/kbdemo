import { LotSelectType } from '@models/Enums';
import { UserLotSelectionData } from '@models/Lot';

export type PhotosNavProps = {
  userLotSelection: UserLotSelectionData;
  lotSelectedType: LotSelectType;
  capturedImages: string[];
};
