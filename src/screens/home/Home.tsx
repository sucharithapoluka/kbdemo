import React, { memo, useEffect } from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import notifee, { AuthorizationStatus } from '@notifee/react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { KB_LOGO } from '@assets/Svgs';
import Button from '@components/common/Button';
import CustomStatusBar from '@components/CustomStatusBar';
import Header from '@components/header/Header';
import useBeforeRemoveListener from '@constants/Common';
import { HeaderTheme, LotSelectType } from '@models/Enums';
import { RootStackParamList } from '@routes/RootStackParam';
import { DashboardLayoutNavProps } from '@screens/dashboard-layout/DashboardLayoutNavProps';

export default function Home() {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();

  useBeforeRemoveListener(navigation);

  async function requestNotificationPermission() {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      console.log('status:', settings.authorizationStatus);
    } else {
      console.log('User declined permissions');
    }
  }

  useEffect(() => {
    requestNotificationPermission();
  }, [navigation]);

  const photos = () => {
    const photosNavProps: DashboardLayoutNavProps = {
      lotSelectType: LotSelectType.photos,
    };
    navigation.navigate('DashboardLayout', photosNavProps);
  };

  const messages = () => {
    const messageNavProps: DashboardLayoutNavProps = {
      lotSelectType: LotSelectType.messages,
    };
    navigation.navigate('DashboardLayout', messageNavProps);
  };

  const homeView = () => {
    return (
      <ImageBackground
        source={require('@assets/home/HomeBackground.png')}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.gradientTop}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 0, y: 0 }}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,1)']}
          style={styles.gradientBottom}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 0, y: 0.9 }}
        />
        <SafeAreaView style={styles.mainContainer}>
          <Header
            home={true}
            logo={false}
            cancelText={false}
            theme={HeaderTheme.transparent}
            menu={true}
            cancelIcon={false}
            backIcon={false}
          />
          <View style={styles.container}>
            <View style={styles.headerLogo}>
              <KB_LOGO width={109} height={109} />
            </View>
            <View style={styles.footerContainer}>
              <Text style={styles.text}>Welcome to the employee app</Text>
              <View style={styles.buttonView}>
                <View style={styles.photosButton}>
                  <Button title='Photos' onPress={photos} />
                </View>
                <View style={styles.messagesButton}>
                  <Button title='Messages' onPress={messages} />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };

  const MemorizedHomeView = memo(homeView);

  return Platform.OS === 'ios' ? (
    <MemorizedHomeView />
  ) : (
    <>
      <CustomStatusBar
        statusBgColor='transparent'
        barStyle='light-content'
        isTranslucent={true}
      >
        <MemorizedHomeView />
      </CustomStatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    marginTop: 10,
  },
  container: {
    flex: 1,
    margin: 15,
  },
  text: {
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
    lineHeight: 42,
  },
  buttonView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
    width: '98%',
  },
  photosButton: {
    flex: 1,
    marginRight: 10,
  },
  messagesButton: {
    flex: 1,
    marginLeft: 10,
  },
  headerLogo: {
    alignItems: 'center',
    marginTop: '15%',
  },
  logo: {
    height: 80,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  gradientTop: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  gradientBottom: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
