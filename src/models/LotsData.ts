import { DropdownData } from "./DropdownData";

export type CompanyData = {
    companyCode: string,
    projects: ProjectData[]
}

export type ProjectData = {
    projectCode: string;
    tracts: TractData[]
}

export type TractData = {
    tract: string;
    lots: LotData[]
}

export type LotData = {
    lot: string;
    address: string;
    userName: string
}

export enum LotDataType {
    All,
    CompanyCode,
    ProjectCode,
    Tract,
    Lot
}

export type UserLotSelectionData = {
    companyCode: string | null;
    projectCode: string | null;
    tract: string | null;
    lot: string | null;
    selectedCompanyData: CompanyData | null;
    selectedProjectData: ProjectData | null;
    selectedTractData: TractData | null;
    selectedLotData: LotData | null;
    projectsData: DropdownData[] | null;
    tractsData: DropdownData[] | null;
    lotsData: DropdownData[] | null;
}

export interface LotSelectProps {
    lotSelectType: LotSelectType;
    userLotSelectedData: UserLotSelectionData;
    onPress: () => void;
}

export enum LotSelectType {
    photos = "Photos",
    Messages = "Messages"
}

export type UploadNavProps = {
    lotSelectType: LotSelectType;
}