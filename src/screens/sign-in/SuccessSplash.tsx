import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '@contexts/Auth';
import { AppTheme } from '@styles/AppTheme';

const SuccessSplash = () => {
  const auth = useAuth();
  const userMessage = auth.authData
    ? `Hi ${auth.authData.name}! Signing you in...`
    : 'Please proceed on the browser';

  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/home/kbHomeLogo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>{userMessage}</Text>
    </View>
  );
};

export default SuccessSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: AppTheme.colors.black,
  },
});
