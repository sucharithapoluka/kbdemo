import React, { FC, useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Dropdown from '@components/dropdown/Dropdown';
import { DropdownItemProps } from '@components/dropdown/DropdownProps';
import { SAMPLE_LOT_DATA } from '@constants/Common';
import { LotDataType, LotSelectType } from '@models/Enums';
import { CompanyData, LotData, ProjectData, TractData } from '@models/Lot';
import { CommonStyles } from '@styles/App';
import { AppTheme } from '@styles/AppTheme';

import { LotSelectProps } from './LotSelectProps';

const LotSelect: FC<LotSelectProps> = (lotSelectProps: LotSelectProps) => {
  const [projectsData, setProjectsData] = useState<DropdownItemProps[] | null>(
    [],
  );
  const [tractsData, setTractsData] = useState<DropdownItemProps[] | null>([]);
  const [lotsData, setLotsData] = useState<DropdownItemProps[] | null>([]);
  const [selectedLot, setSelectedLot] = useState('');
  const [companiesData] = useState(() => {
    return SAMPLE_LOT_DATA.map(
      companyItem =>
        ({
          label: `${companyItem.companyCode.trim()} - ${companyItem.name.trim()}`,
          value: companyItem.companyCode,
        } as DropdownItemProps),
    );
  });
  const buttonText =
    lotSelectProps.lotSelectType == LotSelectType.photos
      ? 'Add Photos'
      : 'Create Message';

  useEffect(() => {
    if (lotSelectProps && lotSelectProps.userLotSelectedData) {
      if (lotSelectProps.userLotSelectedData.projectsData) {
        setProjectsData(lotSelectProps.userLotSelectedData.projectsData);
      }

      if (lotSelectProps.userLotSelectedData.tractsData) {
        setTractsData(lotSelectProps.userLotSelectedData.tractsData);
      }

      if (lotSelectProps.userLotSelectedData.lotsData) {
        setLotsData(lotSelectProps.userLotSelectedData.lotsData);
      }

      if (lotSelectProps.userLotSelectedData.lot) {
        setSelectedLot(lotSelectProps.userLotSelectedData.lot);
      }
    }
  }, [lotSelectProps]);

  const resetDropdownValues = (lotDataTye: LotDataType) => {
    switch (lotDataTye) {
      case LotDataType.all:
      case LotDataType.companyCode:
        setProjectsData(null);
        setLotsData(null);
        setTractsData(null);
        setSelectedLot('');
        lotSelectProps.userLotSelectedData.projectsData = null;
        lotSelectProps.userLotSelectedData.tractsData = null;
        lotSelectProps.userLotSelectedData.lotsData = null;
        lotSelectProps.userLotSelectedData.selectedCompanyData = null;
        lotSelectProps.userLotSelectedData.selectedProjectData = null;
        lotSelectProps.userLotSelectedData.selectedTractData = null;
        lotSelectProps.userLotSelectedData.selectedLotData = null;
        lotSelectProps.userLotSelectedData.companyCode = null;
        lotSelectProps.userLotSelectedData.projectCode = null;
        lotSelectProps.userLotSelectedData.tract = null;
        lotSelectProps.userLotSelectedData.lot = null;
        break;
      case LotDataType.projectCode:
        setLotsData(null);
        setTractsData(null);
        setSelectedLot('');
        lotSelectProps.userLotSelectedData.tractsData = null;
        lotSelectProps.userLotSelectedData.lotsData = null;
        lotSelectProps.userLotSelectedData.selectedProjectData = null;
        lotSelectProps.userLotSelectedData.selectedTractData = null;
        lotSelectProps.userLotSelectedData.selectedLotData = null;
        lotSelectProps.userLotSelectedData.projectCode = null;
        lotSelectProps.userLotSelectedData.tract = null;
        lotSelectProps.userLotSelectedData.lot = null;
        break;
      case LotDataType.tract:
        setLotsData(null);
        setTractsData(null);
        setSelectedLot('');
        lotSelectProps.userLotSelectedData.tractsData = null;
        lotSelectProps.userLotSelectedData.lotsData = null;
        lotSelectProps.userLotSelectedData.selectedTractData = null;
        lotSelectProps.userLotSelectedData.selectedLotData = null;
        lotSelectProps.userLotSelectedData.tract = null;
        lotSelectProps.userLotSelectedData.lot = null;
        break;
      case LotDataType.lot:
        setLotsData(null);
        setSelectedLot('');
        lotSelectProps.userLotSelectedData.lotsData = null;
        lotSelectProps.userLotSelectedData.selectedLotData = null;
        lotSelectProps.userLotSelectedData.lot = null;
        break;
      default:
        break;
    }
  };

  const onCompanySelect = (companyCode: string) => {
    try {
      if (
        companyCode &&
        companyCode != lotSelectProps.userLotSelectedData.companyCode
      ) {
        resetDropdownValues(LotDataType.projectCode);
        lotSelectProps.userLotSelectedData.companyCode = companyCode;
        const companyData: CompanyData | undefined = SAMPLE_LOT_DATA.find(
          x => x.companyCode === companyCode,
        );

        if (companyData != undefined) {
          lotSelectProps.userLotSelectedData.selectedCompanyData = companyData;
          const projects = companyData.projects.map(
            projectItem =>
              ({
                label: `${projectItem.projectCode.trim()} - ${projectItem.name.trim()}`,
                value: projectItem.projectCode,
              } as DropdownItemProps),
          );
          setProjectsData(projects);
          lotSelectProps.userLotSelectedData.projectsData = projects;
        }
      }
    } catch (error) {
      console.log('Unable to get projects data');
    }
  };

  const onProjectSelect = (projectCode: string) => {
    try {
      if (
        projectCode &&
        projectCode != lotSelectProps.userLotSelectedData.projectCode
      ) {
        resetDropdownValues(LotDataType.tract);
        lotSelectProps.userLotSelectedData.projectCode = projectCode;
        const projectData: ProjectData | undefined = lotSelectProps
          .userLotSelectedData.selectedCompanyData
          ? lotSelectProps.userLotSelectedData.selectedCompanyData.projects.find(
              x => x.projectCode === projectCode,
            )
          : undefined;

        if (projectData != undefined) {
          lotSelectProps.userLotSelectedData.selectedProjectData = projectData;
          const tracts = projectData.tracts.map(
            projectItem =>
              ({
                label: projectItem.tract.trim(),
                value: projectItem.tract,
              } as DropdownItemProps),
          );
          setTractsData(tracts);
          lotSelectProps.userLotSelectedData.tractsData = tracts;
        }
      }
    } catch (error) {
      console.log('Unable to get tracts data');
    }
  };

  const onTractSelect = (tract: string) => {
    try {
      if (tract && tract != lotSelectProps.userLotSelectedData.tract) {
        resetDropdownValues(LotDataType.lot);
        lotSelectProps.userLotSelectedData.tract = tract;
        const tractData: TractData | undefined = lotSelectProps
          .userLotSelectedData.selectedProjectData
          ? lotSelectProps.userLotSelectedData.selectedProjectData.tracts.find(
              x => x.tract === tract,
            )
          : undefined;

        if (tractData != undefined) {
          lotSelectProps.userLotSelectedData.selectedTractData = tractData;
          const lots = tractData.lots.map(
            lotItem =>
              ({
                label: `${lotItem.lot.trim()} - ${lotItem.userName}`,
                value: lotItem.lot,
              } as DropdownItemProps),
          );
          setLotsData(lots);
          lotSelectProps.userLotSelectedData.lotsData = lots;
        }
      }
    } catch (error) {
      console.log('Unable to get tracts data');
    }
  };

  const onLotSelect = (lot: string) => {
    try {
      if (lot && lot != lotSelectProps.userLotSelectedData.lot) {
        lotSelectProps.userLotSelectedData.lot = lot;
        const lotData: LotData | undefined = lotSelectProps.userLotSelectedData
          .selectedTractData
          ? lotSelectProps.userLotSelectedData.selectedTractData.lots.find(
              x => x.lot === lot,
            )
          : undefined;

        if (lotData != undefined) {
          lotSelectProps.userLotSelectedData.selectedLotData = lotData;
          lotSelectProps.userLotSelectedData.lot = lot;
          setSelectedLot(lot);
        }
      }
    } catch (error) {
      console.log('Unable to get lots data');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={CommonStyles.card}>
          <View style={styles.lotSelectContainer}>
            <View>
              {lotSelectProps.userLotSelectedData.companyCode && (
                <TouchableOpacity
                  style={styles.clearAllContainer}
                  onPress={() => resetDropdownValues(LotDataType.all)}
                >
                  <Text style={styles.clearAllText}>Clear All</Text>
                </TouchableOpacity>
              )}
              <Dropdown
                data={companiesData}
                label='Select a Company'
                placeholder='Companies'
                value={lotSelectProps.userLotSelectedData.companyCode}
                onSelect={item => onCompanySelect(item.value)}
                enableSearch={false}
              />
            </View>

            {lotSelectProps.userLotSelectedData.companyCode && (
              <Dropdown
                data={projectsData}
                label='Select a Project'
                placeholder='Projects'
                value={lotSelectProps.userLotSelectedData.projectCode}
                onSelect={item => onProjectSelect(item.value)}
                enableSearch={false}
              />
            )}

            {lotSelectProps.userLotSelectedData.projectCode && (
              <Dropdown
                data={tractsData}
                label='Select a Tract'
                placeholder='Tracts'
                value={lotSelectProps.userLotSelectedData.tract}
                onSelect={item => onTractSelect(item.value)}
                enableSearch={false}
              />
            )}

            {lotSelectProps.userLotSelectedData.tract && (
              <Dropdown
                data={lotsData}
                label='Select a Lot'
                placeholder='Lots'
                value={lotSelectProps.userLotSelectedData.lot}
                onSelect={item => onLotSelect(item.value)}
                enableSearch={false}
              />
            )}

            {selectedLot &&
              lotSelectProps.userLotSelectedData.selectedLotData && (
                <View>
                  <Text style={styles.label}>Address</Text>
                  <Text style={styles.AddressText}>
                    {lotSelectProps.userLotSelectedData.selectedLotData.address}
                  </Text>
                </View>
              )}
          </View>
        </View>
      </ScrollView>

      {selectedLot && (
        <View style={[CommonStyles.buttonCard, styles.messageContainer]}>
          <TouchableOpacity
            style={styles.button}
            onPress={lotSelectProps.onPress}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default LotSelect;

const styles = StyleSheet.create({
  lotScrollView: {
    flex: 1,
  },
  lotSelectContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 0,
    backgroundColor: AppTheme.colors.surface,
  },
  label: {
    color: AppTheme.colors.black,
    marginVertical: 12,
    fontWeight: 'bold',
    fontSize: 15,
  },
  AddressText: {
    color: AppTheme.colors.black,
  },
  clearAllContainer: {
    position: 'absolute',
    right: 0,
    top: 15,
    zIndex: 1,
  },
  clearAllText: {
    color: AppTheme.colors.link_color,
    textDecorationLine: 'underline',
  },
  button: {
    margin: '5%',
    backgroundColor: AppTheme.colors.primary,
    padding: '3%',
    borderRadius: 5,
    marginTop: 15,
  },
  messageContainer: {
    height: 90,
    width: '100%',
  },
  buttonText: {
    color: AppTheme.colors.black,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
