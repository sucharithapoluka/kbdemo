import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ContentStatusNavProps } from '@components/content-status/ContentStatusNavProps';
import CustomStatusBar from '@components/CustomStatusBar';
import Header from '@components/header/Header';
import Title from '@components/section-title/Title';
import { HeaderTheme, LotSelectType, SyncStatus } from '@models/Enums';
import { HistoryData } from '@models/HistoryData';
import { RootStackParamList } from '@routes/RootStackParam';
import { CommonStyles } from '@styles/App';
import { AppTheme } from '@styles/AppTheme';

import { MessageNavProps } from './MessageNavProps';

const EditMessage = () => {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
  const route = useRoute();
  const params = route.params as MessageNavProps;

  const goBackToMessageScreen = () => {
    navigation.navigate('CreateMessage', params);
  };
  const historyData: HistoryData = {
    companyCode: params.userLotSelection.companyCode
      ? params.userLotSelection.companyCode.trim()
      : '',
    projectCode: params.userLotSelection.projectCode
      ? params.userLotSelection.projectCode.trim()
      : '',
    tractNumber: params.userLotSelection.tract
      ? params.userLotSelection.tract.trim()
      : '',
    lotNumber: params.userLotSelection.lot
      ? params.userLotSelection.lot.trim()
      : '',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date(),
    syncStatus: SyncStatus.pending,
    retryCount: 0,
    syncedOn: new Date(),
    remarks: 'Well-maintained',
    message: params.message,
    subject: params.subject,
    address: params.userLotSelection.selectedLotData?.address
      ? params.userLotSelection.selectedLotData?.address.trim()
      : '',
  };

  const goToStatusScreen = async () => {
    const contentStatusNavProps: ContentStatusNavProps = {
      photoHistory: historyData,
      lotSelectedType: LotSelectType.messages,
      hasStatusPending: true,
      images: [],
    };
    navigation.navigate('StatusMessage', contentStatusNavProps);
  };

  return (
    <CustomStatusBar statusBgColor={AppTheme.colors.surface}>
      <KeyboardAvoidingView
        style={styles.mainContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <SafeAreaView style={styles.viewContainer}>
          <Header
            home={false}
            logo={true}
            cancelText={true}
            theme={HeaderTheme.white}
            menu={true}
            cancelIcon={false}
            backIcon={false}
          />
          <Title headerText={LotSelectType.messages} visable={true} />
          <ScrollView
            style={{ marginBottom: 80 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={[styles.container, CommonStyles.card]}>
              <View style={styles.messageContainer}>
                <Text style={styles.reviewText}>Review your message</Text>
                <TouchableOpacity onPress={goBackToMessageScreen}>
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconStyle}>
                <Icon
                  name='quote-left'
                  size={15}
                  color={AppTheme.colors.primary}
                />
              </View>
              <View style={styles.messageTextView}>
                <View style={styles.subjectView}>
                  <Text style={styles.textStyle}>{params.subject}</Text>
                </View>
                <View style={styles.textStyleView}>
                  <Text style={styles.textStyle}>{params.message}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={[styles.sendMessageView, CommonStyles.buttonCard]}>
            <View style={styles.lineStyle}>
              <TouchableOpacity onPress={goToStatusScreen}>
                <Text style={styles.sendMessageStyle}>Send Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </CustomStatusBar>
  );
};

export default EditMessage;

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
    height: 'auto',
  },
  messageContainer: {
    margin: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 10,
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
  subjectView: {
    marginBottom: 15,
    marginRight: 10,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: AppTheme.colors.black,
    lineHeight: 25,
  },
  sendMessageView: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 80,
    backgroundColor: AppTheme.colors.surface,
  },
  lineStyle: {
    backgroundColor: AppTheme.colors.primary,
    marginLeft: 15,
    width: '92%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 15,
  },
  sendMessageStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AppTheme.colors.black,
    alignSelf: 'center',
  },
});
