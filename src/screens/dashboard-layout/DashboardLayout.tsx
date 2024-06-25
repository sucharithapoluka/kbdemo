import { memo, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import CustomStatusBar from '@components/CustomStatusBar';
import Header from '@components/header/Header';
import UploadHistory from '@components/history/UploadHistory';
import LotSelect from '@components/lot-select/LotSelect';
import Title from '@components/section-title/Title';
import Tabs from '@components/tabs/Tabs';
import { TabProps } from '@components/tabs/TabsProps';
import { TAB_NAMES } from '@constants/Common';
import { HeaderTheme, LotSelectType } from '@models/Enums';
import { UserLotSelectionData } from '@models/Lot';
import { RootStackParamList } from '@routes/RootStackParam';
import { MessageNavProps } from '@screens/messages/MessageNavProps';
import { PhotosNavProps } from '@screens/photos/PhotosNavProps';
import { CommonStyles } from '@styles/App';
import { AppTheme } from '@styles/AppTheme';

import { DashboardLayoutNavProps } from './DashboardLayoutNavProps';

const DashboardLayout = () => {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
  const route = useRoute();
  const params = route.params as DashboardLayoutNavProps;
  const [activeTab, setActiveTab] = useState(TAB_NAMES.upload);
  const MemoizedLotSelect = memo(LotSelect);
  const [photosLotSelectedData] = useState({} as UserLotSelectionData);
  const [messageLotSelectedData] = useState({} as UserLotSelectionData);
  const defualtTab =
    params.lotSelectType == LotSelectType.photos
      ? TAB_NAMES.upload
      : TAB_NAMES.create;
  const userLotSelectedData =
    params.lotSelectType == LotSelectType.photos
      ? photosLotSelectedData
      : messageLotSelectedData;

  useEffect(() => {
    if (params.lotSelectType == LotSelectType.messages) {
      setActiveTab(TAB_NAMES.create);
    } else {
      setActiveTab(TAB_NAMES.upload);
    }
  }, [params]);

  const onTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const onAddPhotosPress = () => {
    const photosProps: PhotosNavProps = {
      userLotSelection: photosLotSelectedData,
      lotSelectedType: params.lotSelectType,
      capturedImages: [],
    };
    navigation.navigate('Camera', photosProps);
  };

  const onCreateMessagePress = () => {
    const messageProps: MessageNavProps = {
      message: '',
      userLotSelection: messageLotSelectedData,
      lotSelectedType: params.lotSelectType,
    };
    navigation.navigate('CreateMessage', messageProps);
  };

  const tabs: TabProps[] = [
    {
      label:
        params.lotSelectType == LotSelectType.photos
          ? TAB_NAMES.upload
          : TAB_NAMES.create,
      onPress: selectedTab => onTabPress(selectedTab),
    },
    {
      label: TAB_NAMES.history,
      onPress: selectedTab => onTabPress(selectedTab),
    },
  ];

  return (
    <CustomStatusBar statusBgColor={AppTheme.colors.surface}>
      <SafeAreaView style={CommonStyles.containerStyle}>
        <Header
          home={true}
          logo={true}
          theme={HeaderTheme.white}
          cancelText={false}
          menu={true}
          cancelIcon={false}
          backIcon={false}
        />
        <Title headerText={params.lotSelectType} visable={true} />

        <Tabs defualtTab={defualtTab} tabs={tabs} />

        {activeTab &&
          (activeTab === TAB_NAMES.upload || activeTab == TAB_NAMES.create) && (
            <MemoizedLotSelect
              userLotSelectedData={userLotSelectedData}
              lotSelectType={params.lotSelectType}
              onPress={() => {
                params.lotSelectType == LotSelectType.photos
                  ? onAddPhotosPress()
                  : onCreateMessagePress();
              }}
            />
          )}
        {params.lotSelectType == LotSelectType.photos &&
          activeTab &&
          activeTab === TAB_NAMES.history && (
            <UploadHistory lotSelectType={LotSelectType.photos} />
          )}
        {params.lotSelectType == LotSelectType.messages &&
          activeTab &&
          activeTab === TAB_NAMES.history && (
            <UploadHistory lotSelectType={LotSelectType.messages} />
          )}
      </SafeAreaView>
    </CustomStatusBar>
  );
};

export default DashboardLayout;
