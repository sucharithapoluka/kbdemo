import { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  DOUBLE_RIGHT_ICON,
  STATUS_COMPLETE_ICON,
  STATUS_FAILED_ICON,
  STATUS_PENDING_ICON,
} from '@assets/Svgs';
import { ContentStatusNavProps } from '@components/content-status/ContentStatusNavProps';
import { LotSelectNavProps } from '@components/lot-select/LotSelectProps';
import { KBHBuildTrackerImage } from '@models/db/KBHBuildTrackerImage';
import { KBHHistory } from '@models/db/KBHHistory';
import { LotSelectType, SortOrder, SyncStatus } from '@models/Enums';
import { RootStackParamList } from '@routes/RootStackParam';
import { geAllKBHHistoryData, getDBConnection } from '@services/db/DbServices';
import { CommonStyles } from '@styles/App';
import { AppTheme } from '@styles/AppTheme';

const UploadHistory = (lotSelectNavProps: LotSelectNavProps) => {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
  const [value, setValue] = useState<string | null>(SortOrder.newest);
  const [isFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showContent, setShowContent] = useState(false);
  const [uploadHistory, setUploadHistory] = useState<
    KBHHistory<KBHBuildTrackerImage>[]
  >([]);
  const [uploadDates, setUploadDates] = useState<Date[] | undefined>();
  const [, setPhotosData] = useState<KBHHistory<KBHBuildTrackerImage>[]>([]);

  const route = useRoute();
  const props = route.params as ContentStatusNavProps;
  console.log('props are :', props);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (lotSelectNavProps.lotSelectType === LotSelectType.photos) {
          const db = await getDBConnection();
          const kbhImageHistoryData = await geAllKBHHistoryData(
            db,
            LotSelectType.photos,
          );

          if (kbhImageHistoryData) {
            setPhotosData(kbhImageHistoryData);
            setUploadHistory(kbhImageHistoryData);

            const uniqueDates = Array.from(
              new Set(
                kbhImageHistoryData.map(
                  item => new Date(item.UploadDate).toISOString().split('T')[0],
                ),
              ),
            ).map(dateString => new Date(dateString || ''));

            const sortedDates = sortDates(uniqueDates, SortOrder.newest);
            setUploadDates(sortedDates);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [lotSelectNavProps]);

  const sortFlatListData = (sortedItem: { value: string }) => {
    setValue(sortedItem.value);
    const sortOrder =
      sortedItem.value === SortOrder.newest
        ? SortOrder.newest
        : SortOrder.oldest;
    const sortedDates = sortDates(uploadDates, sortOrder);
    if (sortedDates) {
      setUploadDates(sortedDates);
    }
  };

  const sortDates = (dates: Date[] | undefined, sortOrder: SortOrder) => {
    if (!dates) return;
    try {
      const sortedDates = dates.sort((date1, date2) => {
        const dateA = date1.getTime();
        const dateB = date2.getTime();
        return sortOrder === SortOrder.oldest ? dateA - dateB : dateB - dateA;
      });
      return sortedDates;
    } catch (error) {
      console.log('Unable to sort dates', error);
    }
  };

  const handleDateSelect = (date: Date) => {
    if (selectedDate?.toISOString() === date.toISOString()) {
      setShowContent(!showContent); // Toggle content visibility
    } else {
      setSelectedDate(date);
      setShowContent(true);
    }
  };

  const onHistoryPress = (item: KBHHistory<KBHBuildTrackerImage>) => {
    const contentStatusProps: ContentStatusNavProps = {
      photoHistory: item,
      lotSelectedType: lotSelectNavProps.lotSelectType,
    };
    navigation.navigate('StatusMessage', contentStatusProps);
  };

  const sortData = [
    { label: SortOrder.newest, value: SortOrder.newest },
    { label: SortOrder.oldest, value: SortOrder.oldest },
  ];

  const renderLotItem = (
    { item }: { item: KBHHistory<KBHBuildTrackerImage> },
    index: number,
  ) => {
    // Check if any images have SyncStatus pending
    const hasPendingImages = item.data?.some(
      (image: { SyncStatus: SyncStatus }) =>
        image.SyncStatus === SyncStatus.pending,
    );

    // Determine the correct sync icon
    let syncIcon;
    if (hasPendingImages) {
      syncIcon = <STATUS_PENDING_ICON />;
    } else if (
      item.data?.some(image => image.SyncStatus === SyncStatus.failed)
    ) {
      syncIcon = <STATUS_FAILED_ICON />;
    } else {
      syncIcon = <STATUS_COMPLETE_ICON />;
    }

    return (
      <TouchableOpacity onPress={() => onHistoryPress(item)}>
        <View style={styles.row}>
          <View style={{ marginRight: 10 }}>{syncIcon}</View>
          <Text style={styles.lotDetails}>C: {item.CompanyCode}</Text>
          <Text style={styles.lotDetails}>P: {item.ProjectCode}</Text>
          <Text style={styles.lotDetails}>T: {item.Tract}</Text>
          <Text style={styles.lotDetails}>L: {item.Lot}</Text>
          <DOUBLE_RIGHT_ICON />
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor:
              index % 3 !== 0 ? AppTheme.colors.surface : AppTheme.colors.grey,
          }}
        ></View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.Uploadcontainer]}>
      <View style={styles.card}>
        <View style={CommonStyles.card}>
          <View style={styles.messageContainer}>
            <View style={styles.photosContainer}>
              <Text style={styles.tabText}>Sort By: </Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.sortingText}
                containerStyle={{ height: 'auto' }}
                itemTextStyle={{ color: 'black' }}
                data={sortData}
                labelField='label'
                valueField='value'
                placeholder='Newest'
                value={value}
                activeColor={AppTheme.colors.primary}
                renderRightIcon={() =>
                  !isFocus ? (
                    <MaterialCommunityIcons
                      style={styles.icon}
                      name='menu-down'
                      size={30}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      style={styles.icon}
                      name='menu-up'
                      size={30}
                    />
                  )
                }
                onChange={item => {
                  sortFlatListData(item);
                }}
              />
            </View>
            <View style={styles.dropdownBottomLine}></View>
            <FlatList
              data={uploadDates}
              keyExtractor={(_item, index) => index.toString()}
              renderItem={({ item: uploadDate, index: itemIndex }) => {
                return (
                  <View
                    style={[
                      itemIndex % 2 !== 0 && {
                        backgroundColor: AppTheme.colors.white_smoke,
                      },
                    ]}
                  >
                    {selectedDate === uploadDate && showContent && (
                      <View style={styles.listLine} />
                    )}
                    <TouchableOpacity
                      style={styles.selectingDate}
                      onPress={() => handleDateSelect(uploadDate)}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          flex: 1,
                        }}
                      >
                        <Text
                          style={[styles.selectedDate, { fontWeight: '800' }]}
                        >
                          {uploadDate.toLocaleDateString('en-US')}
                        </Text>
                        <Entypo
                          style={styles.chevronIcon}
                          name={
                            selectedDate === uploadDate && showContent
                              ? 'chevron-thin-up'
                              : 'chevron-thin-down'
                          }
                          size={20}
                        />
                      </View>
                    </TouchableOpacity>

                    {selectedDate === uploadDate && showContent && (
                      <>
                        <FlatList
                          data={uploadHistory.filter(
                            lot =>
                              new Date(lot.UploadDate).toDateString() ===
                              uploadDate.toDateString(),
                          )}
                          keyExtractor={(_item, index) => index.toString()}
                          renderItem={({ item, index }) =>
                            renderLotItem({ item }, index)
                          } // Correctly destructure item and index
                          style={{
                            borderTopWidth: 2,
                            borderTopColor: AppTheme.colors.grey,
                          }}
                        />
                        <View style={styles.listBottomLine} />
                      </>
                    )}
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default UploadHistory;

const styles = StyleSheet.create({
  Uploadcontainer: {
    flex: 1,
    backgroundColor: AppTheme.colors.white_smoke,
  },
  card: {
    marginBottom: '40%',
  },
  messageContainer: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: '25%',
  },
  photosContainer: {
    marginTop: 10,
    marginBottom: 15,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  tabText: {
    color: 'black',
    alignSelf: 'center',
    marginRight: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    color: AppTheme.colors.black,
  },
  icon: {
    color: AppTheme.colors.black,
    marginRight: 10,
  },
  chevronIcon: {
    color: AppTheme.colors.black,
  },
  listLine: {
    borderTopWidth: 0.6,
    borderTopColor: '#E0E0E0',
  },
  listBottomLine: {
    borderTopWidth: 0.5,
    borderTopColor: AppTheme.colors.black,
  },
  dropdown: {
    height: 45,
    borderColor: AppTheme.colors.primary,
    borderWidth: 1,
    width: 130,
  },
  placeholderStyle: {
    marginLeft: 10,
    color: AppTheme.colors.black,
  },
  sortingText: {
    marginLeft: 10,
    color: AppTheme.colors.black,
  },
  dropdownBottomLine: {
    borderColor: AppTheme.colors.dropdown_border_line,
    borderWidth: 0.5,
    width: '100%',
  },
  selectedDate: {
    fontSize: 16,
    color: AppTheme.colors.black,
    fontWeight: '500',
    letterSpacing: 0.3,
    marginLeft: 5,
  },
  selectingDate: {
    flex: 1,
    marginVertical: 18,
    marginHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  lotDetails: {
    fontSize: 15,
    color: AppTheme.colors.black,
    fontWeight: 'bold',
    marginRight: 5,
    alignSelf: 'center',
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
