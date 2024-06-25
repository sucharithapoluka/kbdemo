import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/header/Header';
import HeaderText from '../../components/header/HeaderText';
import { AppTheme } from '../../styles/AppTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { HeaderTheme } from '../../models/HeaderProps';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/RootStackParam';
import { MessageNavProps } from '../../models/MessageNavProps';
import { CommonStyles } from '../../styles/Common';

const EditMessage = () => {
    const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
    const route = useRoute();
    const params = route.params as MessageNavProps;

    const goBackToMessageScreen = () => {
        navigation.navigate('CreateMessage', { message: params.message })
    }

    const goToStatusScreen = () => {
        console.log('goToStatusScreen')
    }

    return (
        <KeyboardAvoidingView
            style={styles.mainContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <SafeAreaView style={styles.viewContainer}>
                <Header
                    home={false}
                    logo={true}
                    cancelText={true}
                    theme={HeaderTheme.white}
                    menu={true}
                    cancelIcon={false}
                />
                <HeaderText
                    headerText={'Messages'}
                    visable={true}
                />
                <ScrollView style={{ marginBottom: 80 }} showsVerticalScrollIndicator={false}>
                    <View style={[styles.container, CommonStyles.card]}>
                        <View style={styles.messageContainer}>
                            <Text style={styles.reviewText}>Review your message</Text>
                            <TouchableOpacity onPress={goBackToMessageScreen}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.iconStyle}>
                            <Icon name="quote-left" size={15} color={AppTheme.colors.primary} />
                        </View>
                        <View style={styles.messageTextView}>
                            <View style={styles.textStyleView}>
                                <Text style={styles.textStyle}>{params.message}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.sendMessageView}>
                    <View style={styles.lineStyle}>
                        <TouchableOpacity onPress={goToStatusScreen}>
                            <Text style={styles.sendMessageStyle}>Send Message</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default EditMessage

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    viewContainer: {
        flex: 1
    },
    container: {
        margin: 15,
        height: 'auto'
    },
    messageContainer: {
        margin: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    reviewText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppTheme.colors.black
    },
    editText: {
        color: AppTheme.colors.checked_state,
        textDecorationLine: 'underline'
    },
    iconStyle: {
        marginLeft: 15
    },
    messageTextView: {
        marginLeft: 40,
        paddingLeft: 15,
        borderLeftWidth: 2.5,
        borderColor: AppTheme.colors.primary,
        borderStyle: 'solid',
        height: 'auto',
        marginBottom: 15
    },
    textStyleView: {
        marginBottom: 15,
        marginRight: 10
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '400',
        color: AppTheme.colors.black
    },
    sendMessageView: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        height: 80,
        backgroundColor: AppTheme.colors.surface
    },
    lineStyle: {
        backgroundColor: AppTheme.colors.primary,
        marginTop: 15,
        marginLeft: 15,
        width: '92%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    sendMessageStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: AppTheme.colors.black,
        alignSelf: 'center'
    }

})
