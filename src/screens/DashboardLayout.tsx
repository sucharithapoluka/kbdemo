import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { CommonStyles } from "../styles/Common"
import HeaderText from "../components/header/HeaderText"
import { HeaderTheme } from "../models/HeaderProps"
import Header from "../components/header/Header"
import { LotSelectType, UploadNavProps, UserLotSelectionData } from "../models/LotsData"
import { TabProps } from "../models/TabProps"
import { TabNames } from "../constants/AppConstants"
import LotSelect from "../components/LotSelect"
import Tabs from "../components/Tabs"
import { memo, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../models/RootStackParam"

const DashboardLayout = () => {
    const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
    const route = useRoute();
    const params = route.params as UploadNavProps;
    const [activeTab, setActiveTab] = useState(TabNames.upload);
    const MemoizedLotSelect = memo(LotSelect);
    const [photosLotSelectedData] = useState({} as UserLotSelectionData);
    const [messageLotSelectedData] = useState({} as UserLotSelectionData);
    const defualtTab = params.lotSelectType == LotSelectType.photos ? TabNames.upload : TabNames.create;
    const userLotSelectedData = params.lotSelectType == LotSelectType.photos ? photosLotSelectedData : messageLotSelectedData;

    const onTabPress = (tab: string) => {
        setActiveTab(tab);
    }

    const onAddPhotosPress = () => { console.log("add photos clicked"); }

    const onCreateMessagePress = () => { navigation.navigate("CreateMessage", { message: '' }) }

    const tabs: TabProps[] = [
        {
            label: params.lotSelectType == LotSelectType.photos ? TabNames.upload : TabNames.create,
            onPress: (selectedTab) => onTabPress(selectedTab)
        },
        {
            label: TabNames.history,
            onPress: (selectedTab) => onTabPress(selectedTab)
        }
    ]

    return (
        <SafeAreaView style={CommonStyles.containerStyle}>
            <Header
                home={true}
                logo={true}
                theme={HeaderTheme.white}
                cancelText={false}
                menu={true}
                cancelIcon={false}
            />
            <HeaderText
                headerText={params.lotSelectType}
                visable={true}
            />

            <Tabs
                defualtTab={defualtTab}
                tabs={tabs}
            />

            {
                activeTab && (activeTab === TabNames.upload || activeTab == TabNames.create) &&
                <MemoizedLotSelect
                    userLotSelectedData={userLotSelectedData}
                    lotSelectType={params.lotSelectType}
                    onPress={() => {
                        params.lotSelectType == LotSelectType.photos ?
                            onAddPhotosPress() : onCreateMessagePress()
                    }}
                />

            }
            {
                params.lotSelectType == LotSelectType.photos &&
                activeTab && activeTab === TabNames.history &&
                (
                    <Text>Photos History</Text>
                )
            }
            {
                params.lotSelectType == LotSelectType.Messages &&
                activeTab && activeTab === TabNames.history &&
                (
                    <Text>Messages History</Text>
                )
            }
        </SafeAreaView>
    )
}

export default DashboardLayout;