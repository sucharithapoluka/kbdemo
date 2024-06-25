import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { AppTheme } from '@styles/AppTheme';

type CustomButtonProps = {
  title: string;
  disabled?: boolean;
  onPress: () => void;
};

const Button: React.FC<CustomButtonProps> = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonCon}
      disabled={disabled}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonCon: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    height: 50,
    backgroundColor: AppTheme.colors.primary,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '800',
    color: AppTheme.colors.black,
  },
});

export default Button;
