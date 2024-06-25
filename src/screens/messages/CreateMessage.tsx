import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import HeaderText from '../../components/header/HeaderText';
import { useRoute } from '@react-navigation/native';
import { AppTheme } from '../../styles/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/RootStackParam';
import { HeaderTheme } from '../../models/HeaderProps';
import { MessageNavProps } from '../../models/MessageNavProps';
import { CommonStyles } from '../../styles/Common';

const CreateMessage = () => {
    const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
    const route = useRoute();
    const params = route.params as MessageNavProps;
    const [messageVal, setMessageVal] = useState('');

    const reviewMessage = () => {
        navigation.navigate('EditMessage', { message: messageVal })
    }

    useEffect(() => {
        if (params?.message && params?.message != '' && params?.message != undefined) {
            setMessageVal(params?.message)
        }
    }, [params]);

    return (
        <KeyboardAvoidingView
            style={styles.mainContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <SafeAreaView style={styles.viewContainer}>
                <Header
                    home={false}
                    logo={true}
                    theme={HeaderTheme.white}
                    cancelText={true}
                    menu={true}
                    cancelIcon={false}
                />
                <HeaderText headerText={'Messages'} visable={true} />
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
                    <View style={[styles.container, CommonStyles.card]}>
                        <View style={styles.messageContainer}>

                            <Text style={styles.messageText}>Create your message</Text>
                            <TextInput style={styles.createMessage}
                                multiline={true}
                                textAlignVertical='top'
                                value={messageVal}
                                onChangeText={text => setMessageVal(text)}
                            >
                            </TextInput>
                            <View style={{ marginTop: 25 }}>
                                <TouchableOpacity style={styles.reviewText} onPress={reviewMessage} disabled={messageVal == ""}>
                                    <Text style={{ alignSelf: 'center', color: 'black', fontSize: 18, fontWeight: 'bold' }}>Review</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView >
    )
}

export default CreateMessage

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
        margin: 15
    },
    messageText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppTheme.colors.black
    },
    createMessage: {
        marginTop: 15,
        borderWidth: 1,
        borderColor: AppTheme.colors.primary,
        height: 200,
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10,
        color: AppTheme.colors.black
    },
    reviewText: {
        backgroundColor: AppTheme.colors.primary,
        padding: 10,
        height: 45
    }
})