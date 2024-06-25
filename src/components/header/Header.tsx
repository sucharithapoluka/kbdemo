import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  HEADER_CROSS_ICON,
  HEADER_HOME_ICON,
  KB_LOGO,
  SINGLE_LEFT_ICON,
} from '@assets/Svgs';
import { HeaderTheme } from '@models/Enums';
import { RootStackParamList } from '@routes/RootStackParam';
import { AppTheme } from '@styles/AppTheme';

import { HeaderProps } from './HeaderProps';

const Header = (props: HeaderProps) => {
  const { width } = Dimensions.get('window');

  //TODO: move to common place
  const getIconSize = () => {
    if (width > 600) {
      return 36;
    } else if (width > 400) {
      return 32;
    } else {
      return 30;
    }
  };

  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
  const iconColor =
    props.theme != undefined && props.theme == HeaderTheme.transparent
      ? AppTheme.colors.surface
      : AppTheme.colors.black;
  const iconSize = getIconSize();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            props.theme == HeaderTheme.white ? AppTheme.colors.surface : '',
        },
      ]}
    >
      <View style={styles.leftContainer}>
        {props && props.home && (
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <HEADER_HOME_ICON color={iconColor} />
          </TouchableOpacity>
        )}
        {props && props.cancelText && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        )}
        {props && props.backIcon && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SINGLE_LEFT_ICON />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.centerContainer}>
        {props && props.logo && <KB_LOGO />}
      </View>
      <View style={styles.rightContainer}>
        {props && props.menu && (
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Ionicons
              name='menu-outline'
              size={iconSize}
              color={iconColor}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        {props && props.cancelIcon && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <HEADER_CROSS_ICON />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingBottom: 6,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logo: {
    width: 120,
    height: 40,
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    color: AppTheme.colors.surface,
    fontSize: 16,
  },
  cancelText: {
    fontWeight: 'bold',
    color: AppTheme.colors.black,
    fontSize: 16,
    marginTop: 10,
  },
  icon: {
    marginTop: 10,
  },
});

export default Header;
