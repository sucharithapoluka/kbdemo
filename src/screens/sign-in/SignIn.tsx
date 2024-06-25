import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import CustomStatusBar from '@components/CustomStatusBar';
import Slider from '@components/onboarding-slider/Slider';
import SignInButton from '@components/sign-in-button/SignInButton';

export default function SignIn() {
  return (
    <CustomStatusBar>
      <SafeAreaView style={styles.mainContainer}>
        <View style={{ flex: 0.88 }}>
          <Slider />
        </View>
        <View style={{ flex: 0.12 }}>
          <SignInButton />
        </View>
      </SafeAreaView>
    </CustomStatusBar>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 10,
  },
});
