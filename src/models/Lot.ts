import { DropdownItemProps } from '@components/dropdown/DropdownProps';

export type CompanyData = {
  companyCode: string;
  name: string;
  projects: ProjectData[];
};

export type ProjectData = {
  projectCode: string;
  name: string;
  tracts: TractData[];
};

export type TractData = {
  tract: string;
  lots: LotData[];
};

export type LotData = {
  lot: string;
  address: string;
  userName: string;
};

export type UserLotSelectionData = {
  companyCode: string | null;
  projectCode: string | null;
  tract: string | null;
  lot: string | null;
  selectedCompanyData: CompanyData | null;
  selectedProjectData: ProjectData | null;
  selectedTractData: TractData | null;
  selectedLotData: LotData | null;
  projectsData: DropdownItemProps[] | null;
  tractsData: DropdownItemProps[] | null;
  lotsData: DropdownItemProps[] | null;
};
