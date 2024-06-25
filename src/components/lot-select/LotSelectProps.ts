import { LotSelectType } from '@models/Enums';
import { UserLotSelectionData } from '@models/Lot';

export type LotSelectProps = {
  lotSelectType: LotSelectType;
  userLotSelectedData: UserLotSelectionData;
  onPress: () => void;
};

export type LotSelectNavProps = {
  lotSelectType: LotSelectType;
};
