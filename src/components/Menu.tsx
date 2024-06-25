import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../contexts/Auth';
import { AppTheme } from '../styles/AppTheme';
import Header from './header/Header';
import { HeaderTheme } from '../models/HeaderProps';
import { CommonStyles } from '../styles/Common';

const Menu = () => {
    const auth = useAuth();
    const signOut = () => {
        auth.signOut();
    };
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={CommonStyles.card}>
                <Header
                    home={true}
                    logo={true}
                    theme={HeaderTheme.white}
                    cancelText={false}
                    menu={false}
                    cancelIcon={true}
                />
                <View style={styles.shadowLine} />
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.text}>Tutorial</Text>
                    <Entypo name='chevron-thin-right' size={24} color={AppTheme.colors.black} />
                </View>
                <View style={styles.bodyContent}>
                    <Text style={styles.text}>Legal Disclosure</Text>
                    <Entypo name='chevron-thin-right' size={24} color={AppTheme.colors.black} />
                </View>
                <View style={styles.bodyContent}>
                    <Text style={styles.text}>App Usage Acknowledgment</Text>
                    <Entypo name='chevron-thin-right' size={24} color={AppTheme.colors.black} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                    <FontAwesome name="user-circle-o" size={24} color={AppTheme.colors.black} />
                    <Text style={styles.signOut} onPress={signOut}>Sign Out</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default Menu;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: AppTheme.colors.surface
    },
    shadowLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)', // Shadow color
    },
    body: {
        marginLeft: 20,
        marginRight: 20
    },
    text: {
        flexDirection: 'row',
        lineHeight: 21,
        justifyContent: 'space-between',
        letterSpacing: 0.25,
        fontSize: 16,
        color: AppTheme.colors.black
    },
    bodyContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18
    },
    signOut: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 16,
        letterSpacing: 0.25,
        lineHeight: 21,
        color: AppTheme.colors.black
    },
});
