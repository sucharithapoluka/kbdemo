import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SIGN_OUT_ICON, SINGLE_RIGHT_ICON } from '@assets/Svgs';
import CustomStatusBar from '@components/CustomStatusBar';
import Header from '@components/header/Header';
import { useAuth } from '@contexts/Auth';
import { HeaderTheme } from '@models/Enums';
import { CommonStyles } from '@styles/App';
import { AppTheme } from '@styles/AppTheme';

const Menu = () => {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };
  return (
    <CustomStatusBar statusBgColor={AppTheme.colors.surface}>
      <>
        <View style={CommonStyles.menuCard}>
          <Header
            home={true}
            logo={true}
            theme={HeaderTheme.white}
            cancelText={false}
            menu={false}
            cancelIcon={true}
            backIcon={false}
          />
          <View style={styles.shadowLine} />
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.text}>Tutorial</Text>
            <SINGLE_RIGHT_ICON />
          </View>
          <View style={styles.bodyContent}>
            <Text style={styles.text}>Legal Disclosure</Text>
            <SINGLE_RIGHT_ICON />
          </View>
          <View style={styles.bodyContent}>
            <Text style={styles.text}>App Usage Acknowledgment</Text>
            <SINGLE_RIGHT_ICON />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
            }}
          >
            <SIGN_OUT_ICON />
            <Text style={styles.signOut} onPress={signOut}>
              Sign Out
            </Text>
          </View>
        </View>
      </>
    </CustomStatusBar>
  );
};
export default Menu;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppTheme.colors.surface,
  },
  shadowLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)', // Shadow color
  },
  body: {
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    flexDirection: 'row',
    lineHeight: 21,
    justifyContent: 'space-between',
    letterSpacing: 0.25,
    fontSize: 16,
    color: AppTheme.colors.black,
  },
  bodyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  signOut: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
    letterSpacing: 0.25,
    lineHeight: 21,
    color: AppTheme.colors.black,
  },
});
