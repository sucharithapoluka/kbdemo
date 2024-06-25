import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const Logo = () => {
  return (
    <Image
      source={require('@assets/home/kbHomeLogo.png')}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: '12%',
  },
});
