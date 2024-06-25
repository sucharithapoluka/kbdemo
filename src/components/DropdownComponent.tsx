import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DropdownData } from '../models/DropdownData';
import { DropdownProps } from '../models/DropdownProps';
import { AppTheme } from '../styles/AppTheme';

const DropdownComponent = (dropdownProps: DropdownProps) => {
    const [isFocus, setIsFocus] = useState(false);

    const renderItem = (item: DropdownData) => {
        const idx = dropdownProps.data?.indexOf(item);
        const showBGColor = (idx != undefined && idx % 2 === 0) && dropdownProps.value != item.value;

        return (
            <View style={[styles.item, (showBGColor) && { backgroundColor: AppTheme.colors.grey }]}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>
                    {dropdownProps.label}
                </Text>
            </View>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                containerStyle={styles.containerStyle}
                data={dropdownProps.data ? dropdownProps.data : []}
                search={dropdownProps.enableSearch}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={dropdownProps.placeholder}
                searchPlaceholder="Search..."
                value={dropdownProps.value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={dropdownProps.onSelect}
                renderItem={renderItem}
                autoScroll={false}
                activeColor={AppTheme.colors.primary}
                renderRightIcon={() => (!isFocus ?
                    (<MaterialCommunityIcons style={styles.icon} name="menu-down" size={30} />) :
                    (<MaterialCommunityIcons style={styles.icon} name="menu-up" size={30} />))}
            />
        </View>
    );
};

export default DropdownComponent;

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
        color: AppTheme.colors.black
    },
    label: {
        color: AppTheme.colors.black,
        marginVertical: 12,
        fontWeight: "bold",
        fontSize: 15,
    },
    placeholderStyle: {
        fontSize: 16,
        fontWeight: "500",
        paddingLeft: 10
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 10,
        color: AppTheme.colors.black,
        fontWeight: "bold"
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
        fontWeight: "bold",
        color: AppTheme.colors.black,
    },
    itemContainerStyle: {
        width: '100%'
    }
});