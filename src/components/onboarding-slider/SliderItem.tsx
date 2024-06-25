import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { SCREEN_DIMENSIONS } from '@constants/Common';
import { AppTheme } from '@styles/AppTheme';

import { SliderProps } from './SliderProps';

const SliderItem = ({ item }: { item: SliderProps }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.8 }}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={item.image} resizeMode='cover' />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_DIMENSIONS.width,
    alignItems: 'center',
    flex: 1,
  },
  imageContainer: {
    aspectRatio: 0.5,
    borderWidth: 12,
    borderRadius: 36,
    borderColor: AppTheme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    flex: 0.2,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: AppTheme.colors.black,
  },
  description: {
    fontSize: 16,
    marginTop: 12,
    color: AppTheme.colors.black,
    textAlign: 'center',
    lineHeight: 24,
  },
});
