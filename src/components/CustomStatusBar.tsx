import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { AppTheme } from '@styles/AppTheme';

import { CustomStatusBarProps } from '../models/CustomStatusBarProps';

const CustomStatusBar = ({
  children,
  statusBgColor = AppTheme.colors.white_smoke,
  barStyle = 'dark-content',
  isTranslucent = false,
}: CustomStatusBarProps) => {
  return (
    <>
      <StatusBar
        backgroundColor={statusBgColor}
        barStyle={barStyle}
        translucent={isTranslucent}
      />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: AppTheme.colors.white_smoke }}
      >
        {children}
      </SafeAreaView>
    </>
  );
};

export default CustomStatusBar;
