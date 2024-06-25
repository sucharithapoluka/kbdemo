import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import CustomStatusBar from '@components/CustomStatusBar';
import Header from '@components/header/Header';
import Title from '@components/section-title/Title';
import { HeaderTheme, LotSelectType } from '@models/Enums';
import { RootStackParamList } from '@routes/RootStackParam';
import { CommonStyles } from '@styles/App';
import { AppTheme } from '@styles/AppTheme';

import { MessageNavProps } from './MessageNavProps';

const CreateMessage = () => {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
  const route = useRoute();
  const params = route.params as MessageNavProps;
  const [messageVal, setMessageVal] = useState('');
  const [subject, setSubject] = useState('');

  const reviewMessage = () => {
    params.message = messageVal;
    params.subject = subject;
    navigation.navigate('EditMessage', params);
  };

  useEffect(() => {
    if (
      params?.message &&
      params?.message != '' &&
      params?.message != undefined
    ) {
      setMessageVal(params?.message);
    }
    if (
      params?.subject &&
      params?.subject != '' &&
      params?.subject != undefined
    ) {
      setSubject(params?.subject);
    }
  }, [params]);

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
            theme={HeaderTheme.white}
            cancelText={true}
            menu={true}
            cancelIcon={false}
            backIcon={false}
          />
          <Title headerText={LotSelectType.messages} visable={true} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='always'
          >
            <View style={[styles.container, CommonStyles.card]}>
              <View style={styles.messageContainer}>
                <Text style={styles.messageText}>Create your message</Text>
                <Text style={styles.subjectText}>Subject</Text>
                <TextInput
                  style={styles.subject}
                  value={subject}
                  placeholder='Add a subject'
                  placeholderTextColor={AppTheme.colors.placeholder_text_color}
                  onChangeText={text => setSubject(text)}
                />
                <Text style={styles.subjectText}>Message</Text>
                <TextInput
                  style={styles.createMessage}
                  multiline={true}
                  textAlignVertical='top'
                  value={messageVal}
                  placeholder='Add a message'
                  placeholderTextColor={AppTheme.colors.placeholder_text_color}
                  onChangeText={text => setMessageVal(text)}
                />
                <View style={{ marginTop: 25 }}>
                  <TouchableOpacity
                    style={[
                      styles.reviewText,
                      { opacity: messageVal == '' || subject == '' ? 0.5 : 1 },
                    ]}
                    onPress={reviewMessage}
                    disabled={messageVal == '' || subject == ''}
                  >
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: 'black',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}
                    >
                      Review
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </CustomStatusBar>
  );
};

export default CreateMessage;

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
  },
  messageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppTheme.colors.black,
  },
  subjectText: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 15,
    color: AppTheme.colors.black,
  },
  subject: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: AppTheme.colors.primary,
    height: 40,
    fontSize: 16,
    padding: 10,
    color: AppTheme.colors.black,
  },
  createMessage: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: AppTheme.colors.primary,
    height: 200,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    color: AppTheme.colors.black,
    lineHeight: 25,
  },
  reviewText: {
    backgroundColor: AppTheme.colors.primary,
    padding: 10,
    height: 45,
  },
});
