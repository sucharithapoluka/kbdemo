import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '../components/Onboarding/Slider';
import SignInButton from '../components/SignInButton';

export default function SignIn() {

  return (
    <View style={styles.mainContainer}>
      <Slider />
      <View style={styles.buttonView}>
        <SignInButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 30,
  },
  buttonView: {
    bottom: 100
  }
});
