import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

import { Dropdown as ElementDropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { AppTheme } from '@styles/AppTheme';

import { DropdownItemProps, DropdownProps } from './DropdownProps';

const Dropdown = (dropdownProps: DropdownProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [animationProgress] = useState(new Animated.Value(0));

  const renderItem = (item: DropdownItemProps) => {
    const idx = dropdownProps.data?.indexOf(item);
    const showBGColor =
      idx != undefined && idx % 2 === 0 && dropdownProps.value != item.value;

    return (
      <Animated.View
        style={[
          styles.item,
          showBGColor && { backgroundColor: AppTheme.colors.grey },
        ]}
      >
        <Text style={styles.textItem}>{item.label}</Text>
      </Animated.View>
    );
  };

  useEffect(() => {
    Animated.timing(animationProgress, {
      toValue: isFocus ? 1 : 0,
      duration: isFocus ? 200 : 150,
      useNativeDriver: true, // Set to false because we're animating a non-native component
    }).start();
  }, [isFocus, animationProgress]);

  const rotateInterpolate = animationProgress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const renderRightIcon = () => (
    <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
      <MaterialCommunityIcons
        name='menu-down'
        size={30}
        color={AppTheme.colors.black}
      />
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{dropdownProps.label}</Text>
      </View>
      <ElementDropdown
        style={styles.dropdown}
        placeholderStyle={[
          styles.placeholderStyle,
          isFocus && { color: AppTheme.colors.placeholder_text_color },
        ]}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        containerStyle={styles.containerStyle}
        data={dropdownProps.data ? dropdownProps.data : []}
        search={dropdownProps.enableSearch}
        maxHeight={190}
        labelField='label'
        valueField='value'
        placeholder={dropdownProps.placeholder}
        searchPlaceholder='Search...'
        value={dropdownProps.value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={dropdownProps.onSelect}
        renderItem={renderItem}
        autoScroll={false}
        activeColor={AppTheme.colors.primary}
        renderRightIcon={renderRightIcon}
      />
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdown: {
    backgroundColor: AppTheme.colors.surface,
    height: 45,
    borderColor: AppTheme.colors.primary,
    borderWidth: 1,
    paddingLeft: 2,
    paddingRight: 5,
  },
  icon: {
    color: AppTheme.colors.black,
  },
  label: {
    color: AppTheme.colors.black,
    marginVertical: 12,
    fontWeight: 'bold',
    fontSize: 15,
  },
  placeholderStyle: {
    fontSize: 16,
    paddingLeft: 10,
    color: AppTheme.colors.black,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 10,
    color: AppTheme.colors.black,
    fontWeight: 'bold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  containerStyle: {
    borderColor: AppTheme.colors.primary,
    borderWidth: 1,
    borderTopWidth: 0,
    marginTop: -3,
    marginLeft: 0.6,
  },
  item: {
    padding: 15,
    paddingLeft: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: AppTheme.colors.black,
  },
  itemContainerStyle: {
    width: '100%',
  },
});
