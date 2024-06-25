import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppTheme } from '@styles/AppTheme';

import { TitleProps } from './TitleProps';

const Title = (screenTitleProps: TitleProps) => {
  return (
    screenTitleProps &&
    screenTitleProps.headerText &&
    screenTitleProps.visable && (
      <View style={styles.tab}>
        <Text style={styles.text}>{screenTitleProps.headerText}</Text>
      </View>
    )
  );
};

export default Title;

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppTheme.colors.header_background,
    height: 40,
  },
  text: {
    fontWeight: 'bold',
    color: AppTheme.colors.surface,
    fontSize: 16,
  },
});
