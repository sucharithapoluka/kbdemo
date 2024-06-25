import { memo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { UNREAD_COUNT_INDICATOR } from '@assets/Svgs';
import { TAB_NAMES } from '@constants/Common';
import { AppTheme } from '@styles/AppTheme';

import { TabProps, TabsProps } from './TabsProps';

const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = useState(props.defualtTab);

  // Function to render a tab
  const tab = (tabProps: TabProps) => {
    return tabProps && tabProps.label ? (
      <View style={styles.tab}>
        <View style={styles.tab}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text
                style={[
                  styles.tabText,
                  activeTab === tabProps.label && styles.activeTabStyle,
                ]}
                onPress={() => {
                  setActiveTab(tabProps.label);
                  tabProps.onPress?.(tabProps.label);
                }}
              >
                {tabProps.label}
              </Text>
              {activeTab === tabProps.label && (
                <View style={styles.underline} />
              )}
            </View>
            <View style={{ marginLeft: 3, marginTop: 6 }}>
              {tabProps.label === TAB_NAMES.history && (
                <UNREAD_COUNT_INDICATOR />
              )}
            </View>
          </View>
        </View>
      </View>
    ) : null;
  };

  const MemoizedTab = memo(tab);

  return props &&
    props.tabs &&
    Array.isArray(props.tabs) &&
    props.tabs.length > 0 ? (
    <View style={styles.container}>
      {props.tabs.map((tabProps, idx) => (
        <View style={{ flexDirection: 'row' }} key={idx}>
          {idx > 0 && <View style={styles.separator} />}
          <MemoizedTab {...tabProps} />
        </View>
      ))}
    </View>
  ) : null;
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 18,
    justifyContent: 'center',
    backgroundColor: AppTheme.colors.white_smoke,
  },
  tab: {
    marginHorizontal: 6,
  },
  tabText: {
    color: AppTheme.colors.black,
    alignSelf: 'center',
  },
  separator: {
    marginTop: 4,
    marginBottom: 9,
    borderLeftWidth: 1,
    backgroundColor: AppTheme.colors.black,
  },
  underline: {
    height: 4,
    backgroundColor: AppTheme.colors.primary,
    marginTop: 5, // Adjust this value to position the underline correctly
  },
  activeTabStyle: {
    fontWeight: 'bold',
  },
  verticleLine: {
    marginTop: 5,
    width: 10,
    backgroundColor: AppTheme.colors.black,
  },
});
