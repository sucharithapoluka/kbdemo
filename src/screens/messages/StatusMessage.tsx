import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ContentStatusNavProps } from '@components/content-status/ContentStatusNavProps';
import { LotSelectNavProps } from '@components/lot-select/LotSelectProps';
import Title from '@components/section-title/Title';
import { HeaderTheme, LotSelectType, SyncStatus } from '@models/Enums';
import { RootStackParamList } from '@routes/RootStackParam';
import { CommonStyles } from '@styles/App';

import Status from '../../components/content-status/ContentStatus';
import CustomStatusBar from '../../components/CustomStatusBar';
import Header from '../../components/header/Header';
import { AppTheme } from '../../styles/AppTheme';

const StatusMessage = () => {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
  const route = useRoute();
  const params = route.params as ContentStatusNavProps;

  const goToUploadScreen = () => {
    const photosNavProps: LotSelectNavProps = {
      lotSelectType: params.lotSelectedType,
    };
    navigation.navigate('DashboardLayout', photosNavProps);
  };

  return (
    <CustomStatusBar statusBgColor={AppTheme.colors.surface}>
      <View style={styles.mainContainer}>
        <SafeAreaView style={styles.viewContainer}>
          <Header
            home={params.hasStatusPending ? true : false}
            logo={true}
            cancelText={false}
            theme={HeaderTheme.white}
            menu={true}
            cancelIcon={false}
            backIcon={params.hasStatusPending ? false : true}
          />
          <Title headerText={params.lotSelectedType} visable={true} />
          <Status />

          {(params.lotSelectedType == LotSelectType.photos ||
            params.lotSelectedType == LotSelectType.messages) &&
            params.hasStatusPending &&
            params.photoHistory?.data?.some(
              image => image.SyncStatus === SyncStatus.pending,
            ) && (
              <View style={[styles.sendMessageView, CommonStyles.buttonCard]}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={goToUploadScreen}
                >
                  <Text style={styles.sendMessageStyle}>Done</Text>
                </TouchableOpacity>
              </View>
            )}
        </SafeAreaView>
      </View>
    </CustomStatusBar>
  );
};

export default StatusMessage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppTheme.colors.white_smoke,
  },
  viewContainer: {
    flex: 1,
  },
  container: {
    margin: 15,
    backgroundColor: AppTheme.colors.surface,
    height: 'auto',
  },
  reviewText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppTheme.colors.black,
  },
  editText: {
    color: AppTheme.colors.checked_state,
    textDecorationLine: 'underline',
  },
  iconStyle: {
    marginLeft: 15,
  },
  messageTextView: {
    marginLeft: 40,
    paddingLeft: 15,
    borderLeftWidth: 2.5,
    borderColor: AppTheme.colors.primary,
    borderStyle: 'solid',
    height: 'auto',
    marginBottom: 15,
  },
  textStyleView: {
    marginBottom: 15,
    marginRight: 10,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: AppTheme.colors.black,
  },
  sendMessageView: {
    height: 85,
    width: '100%',
  },
  button: {
    margin: '3.5%',
    backgroundColor: AppTheme.colors.primary,
    padding: '3%',
    borderRadius: 5,
    marginTop: 15,
  },
  sendMessageStyle: {
    fontSize: 17,
    fontWeight: '800',
    color: AppTheme.colors.black,
    alignSelf: 'center',
  },
});
