import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScreenTitleProps } from '../../models/ScreenTitleProps';
import { AppTheme } from '../../styles/AppTheme';

const HeaderText = (screenTitleProps: ScreenTitleProps) => {

    return (
        screenTitleProps && screenTitleProps.headerText && screenTitleProps.visable &&
        (<View style={styles.tab}>
            <Text style={styles.text}>{screenTitleProps.headerText}</Text>
        </View>)
    )
}

export default HeaderText

const styles = StyleSheet.create({

    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppTheme.colors.headerBackground,
        height: 40,
    },
    text: {
        fontWeight: 'bold',
        color: AppTheme.colors.surface,
        fontSize: 16,
    }
})