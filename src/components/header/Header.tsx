import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import { StackNavigationProp } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { HeaderProps, HeaderTheme } from '../../models/HeaderProps';
import { RootStackParamList } from '../../models/RootStackParam';
import { AppTheme } from '../../styles/AppTheme';


const Header = (props: HeaderProps) => {
    const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
    const iconColor = props.theme != undefined && props.theme == HeaderTheme.transparent ? AppTheme.colors.surface : AppTheme.colors.black;
    const iconSize = 28;

    return (
        <View style={[styles.container, { backgroundColor: props.theme == HeaderTheme.white ? AppTheme.colors.surface : '' }]}>
            {props && props.home && (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Foundation name="home"
                        size={iconSize}
                        color={iconColor}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            )}
            {props && props.cancelText && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
            )}
            {props && props.logo && (
                <Image
                    source={require('../../assets/kb-logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            )}
            {props && props.menu && (
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Feather name="menu"
                        size={iconSize}
                        color={iconColor}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            )}
            {props && props.cancelIcon && (
                <TouchableOpacity>
                    <AntDesign name="close"
                        size={iconSize}
                        color={AppTheme.colors.black}
                        onPress={() => navigation.goBack()}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            )}
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    logo: {
        width: 120,
        height: 40,
        marginTop: 10
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
        marginTop: 10
    },
    icon: {
        marginTop: 10
    }
});

export default Header;
