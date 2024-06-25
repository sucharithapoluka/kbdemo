import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AppTheme } from '../styles/AppTheme';

export const Loading = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
            }}>
            <ActivityIndicator color={AppTheme.colors.black} animating={true} size="small" />
        </View>
    );
};