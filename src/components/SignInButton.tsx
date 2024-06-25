import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../contexts/Auth';
import Button from './Button';
import { AppTheme } from '../styles/AppTheme';

const SignInButton = () => {
    const [loading, isLoading] = useState(false);
    const [userMessage, setUserMessage] = useState('Please proceed on the browser');
    const auth = useAuth();

    const onSignInWithAdPressed = async () => {
        try {
            isLoading(true);
            var userData = await auth.signIn();
            if (userData != undefined) {
                setUserMessage(`Hi ${userData?.name}! Signing you in...`);
                await auth.saveAuthData(userData);
            }
            else {
                setUserMessage('Failed to Signin ! Try again... ');
            }
            isLoading(false);
            setUserMessage('Please proceed on the browser');
        } catch (error) {
            console.log('signin error', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonView}>

                <Button
                    onPress={onSignInWithAdPressed}
                    title="Sign In"
                />
            </View>
        </View>
    )
}

export default SignInButton

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: AppTheme.colors.surface,
    },
    buttonView: {
        marginTop: 13,
        marginBottom: 30,
        width: '90%',
        alignSelf: 'center',
    }
})