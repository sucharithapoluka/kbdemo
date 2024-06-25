import { LotSelectType } from '@models/Enums';
import { UserLotSelectionData } from '@models/Lot';

export type MessageNavProps = {
  message?: string | undefined;
  subject?: string | undefined;
  userLotSelection: UserLotSelectionData;
  lotSelectedType: LotSelectType;
};
