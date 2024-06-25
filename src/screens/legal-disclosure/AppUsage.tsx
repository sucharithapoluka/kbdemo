import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '@components/common/Button';
import CustomStatusBar from '@components/CustomStatusBar';
import useBeforeRemoveListener from '@constants/Common';
import { RootStackParamList } from '@routes/RootStackParam';
import { CommonStyles } from '@styles/App';
import { AppTheme } from '@styles/AppTheme';

export default function AppAcknowledgement() {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();

  useBeforeRemoveListener(navigation);
  const acknowledgementData = [
    {
      sno: ' 1.',
      title: 'App Usage Title',
      content:
        'Lorem ipsum dolor sit amet. consectetur ‘adipiscing el sed do eiusmod fempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      sno: ' 2.',
      title: 'App Usage Title',
      content:
        'Lorem ipsum dolor sit amet. consectetur ‘adipiscing eit sed do eiusmod fempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      sno: ' 3.',
      title: 'App Usage Title',
      content:
        'Lorem ipsum dolor sit amet. consectetur ‘adipiscing el sed do eiusmod fempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      sno: ' 4.',
      title: 'App Usage Title',
      content:
        'Lorem ipsum dolor sit amet. consectetur ‘adipiscing eit sed do eiusmod fempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      sno: ' 5.',
      title: 'App Usage Title',
      content:
        'Lorem ipsum dolor sit amet. consectetur ‘adipiscing el sed do eiusmod fempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      sno: ' 6.',
      title: 'App Usage Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elt. sed do eiusmod fempor Incicicunt ut labore ef dolore magna aliqua.',
    },
    {
      sno: ' 7.',
      title: 'App Usage Title',
      content:
        'Lorem ipsum dolor sit amet. consectetur adipiscing ei. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      sno: ' 8.',
      title: 'App Usage Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elt. sed do eiusmod fempor Incicicunt ut labore et dolore magna aliqua.',
    },
    {
      sno: ' 9.',
      title: 'App Usage Title',
      content:
        'Lorem ipsum dolor sit amet. consectetur adipiscing ei. sed do eiusmod tempor incicidunt ut labore et dolore Magna aliqua.',
    },
    {
      sno: ' 10.',
      title: 'App Usage Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elt. sed do eiusmod fempor Incicicunt ut labore et dolore magna aliqua.',
    },
  ];

  const [isAcknowledged, setIsAcknowledged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('appUsageAcknowledged')
      .then(value => {
        if (value === 'true') {
          setIsAcknowledged(true);
          navigation.navigate('Home');
        }
        setIsLoading(false); // Whether the operation is successful or not, loading is finished
      })
      .catch(error => {
        console.error('Error reading AsyncStorage:', error);
        setIsLoading(false); // Stop loading in case of an error
      });
  }, [navigation]);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleContinue = () => {
    if (isChecked) {
      AsyncStorage.setItem('appUsageAcknowledged', 'true')
        .then(() => {
          setIsAcknowledged(true);
          navigation.navigate('Home');
        })
        .catch(error => {
          console.error('Error storing AsyncStorage:', error);
          setIsLoading(false); // Stop loading in case of an error
        });
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size='large' color={AppTheme.colors.surface} />
      </View>
    );
  }

  if (isAcknowledged) {
    return null;
  }
  return (
    <CustomStatusBar>
      <View style={styles.container}>
        <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
          <SafeAreaView style={[CommonStyles.safeContainerStyle]}>
            <Text style={styles.heading}>App Usage Acknowledgment</Text>
          </SafeAreaView>
          <View style={styles.acknowledgement}>
            <View>
              {acknowledgementData.map((item, index) => (
                <View key={index} style={styles.appData}>
                  <View>
                    <Text style={styles.serialNumber}>{item.sno}</Text>
                  </View>
                  <View>
                    <Text style={styles.contentTitle}>{item.title}</Text>
                    <Text style={styles.content}>{item.content}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.consentView}>
            {isChecked ? (
              <TouchableOpacity onPress={handleCheckboxToggle}>
                <MaterialCommunityIcons
                  style={[
                    styles.checkIcon,
                    { color: AppTheme.colors.checked_state },
                  ]}
                  name='checkbox-marked'
                  size={30}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleCheckboxToggle}>
                <MaterialCommunityIcons
                  style={styles.checkIcon}
                  name='checkbox-blank-outline'
                  size={30}
                ></MaterialCommunityIcons>
              </TouchableOpacity>
            )}
            <Text style={styles.consentText}>
              I agree fo Lorem ipsum dolor sit amet, consectetur adipiscing eli,
              sed do eiusmod fempor incididunt ut labore ef dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>

          <View style={styles.continueContainerStyle}>
            <Button
              title='Continue'
              disabled={!isChecked}
              onPress={handleContinue}
            ></Button>
          </View>
        </ScrollView>
      </View>
    </CustomStatusBar>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: AppTheme.colors.white_smoke,
  },
  heading: {
    fontSize: 20,
    color: AppTheme.colors.black,
    fontWeight: '900',
    marginVertical: 15,
  },
  acknowledgement: {
    marginRight: 40,
  },
  appData: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  serialNumber: {
    fontWeight: 'bold',
    marginRight: 5,
    color: AppTheme.colors.black,
  },
  contentTitle: {
    fontWeight: 'bold',
    color: AppTheme.colors.black,
    marginBottom: 10,
  },
  continueContainerStyle: {
    marginHorizontal: 5,
    marginVertical: 17,
  },
  content: {
    color: AppTheme.colors.black,
    fontSize: 14,
    lineHeight: 24,
  },
  consentView: {
    marginTop: 20,
    flexDirection: 'row',
  },
  checkIcon: {
    color: AppTheme.colors.black,
    marginRight: 10,
  },
  consentText: {
    color: AppTheme.colors.black,
    marginRight: 50,
    fontSize: 12,
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
