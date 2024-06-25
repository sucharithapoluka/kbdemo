import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import notifee, { AuthorizationStatus } from '@notifee/react-native';
import Header from '../components/header/Header';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../models/RootStackParam';
import { HeaderTheme } from '../models/HeaderProps';
import { LotSelectType, UploadNavProps } from '../models/LotsData';

export default function Home() {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();

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
    const photosNavProps: UploadNavProps = {
      lotSelectType: LotSelectType.photos
    }
    navigation.navigate("DashboardLayout", photosNavProps);
  }
  const Messages = () => {
    const messageNavProps: UploadNavProps = {
      lotSelectType: LotSelectType.Messages
    }
    navigation.navigate("DashboardLayout", messageNavProps);
  }

  return (
    <ImageBackground
      source={require('../assets/Home_background.png')}
      style={styles.backgroundImage}>
      <LinearGradient colors={['transparent', 'rgba(0,0,0,10)']} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, right: 0, left: 0 }} start={{ x: 0, y: 0.5 }} end={{ x: 0, y: 0.9 }} />
      <SafeAreaView style={styles.mainContainer}>
        <View >
          <Header
            home={true}
            logo={false}
            cancelText={false}
            theme={HeaderTheme.transparent}
            menu={true}
            cancelIcon={false}
          />
        </View>
        <View style={styles.headerLogo}>
          <Image source={require('../assets/kb-logo.png')}
            style={styles.logo}
            resizeMode="contain" />
        </View>
        <View style={styles.fotterContainer}>
          <Text style={styles.text}>Welcome to the employee app</Text>
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Button title='Photos' onPress={photos} />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Button title='Messages' onPress={Messages} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    margin: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 43,
    fontWeight: 'bold'
  },
  headerLogo: {
    alignItems: 'center',
    marginTop: '15%'
  },
  logo: {
    height: 80,
  },
  fotterContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20
  }
})

