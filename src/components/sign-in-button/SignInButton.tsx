import React, { useState } from 'react'; // Import useState
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomAlert from '@components/custom-alert/CustomAlert';
import { useAuth } from '@contexts/Auth';
import { AppTheme } from '@styles/AppTheme';

const SignInButton = () => {
  const auth = useAuth();
  const [showAlert, setShowAlert] = useState(false); // State to control whether to show the alert or not

  const handleCancel = () => {
    console.log('Sign in canceled');
    setShowAlert(false); // Hide the alert
  };

  const handleContinue = async () => {
    try {
      const userData = await auth.signIn();
      await auth.saveAuthData(userData);
      setShowAlert(false); // Hide the alert after successful sign-in
    } catch (error) {
      console.log('Sign in error', error);
    }
  };

  const onSignInWithAdPressed = async () => {
    try {
      if (Platform.OS === 'android') {
        // Show custom alert for Android
        setShowAlert(true);
      } else {
        // For iOS, proceed directly without showing the custom alert
        handleContinue();
      }
    } catch (error) {
      console.log('Sign in error', error);
    }
  };

  return (
    <View style={styles.buttonCard}>
      <TouchableOpacity style={styles.button} onPress={onSignInWithAdPressed}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {/* Conditionally render the CustomAlert */}
      {showAlert && (
        <CustomAlert
          title='"KB Home Employee" Wants to Use "microsoftonline.com" to Sign In'
          message='This allows the app and website to share information about you.'
          onCancel={handleCancel}
          onContinue={handleContinue}
          isVisible={true}
        />
      )}
    </View>
  );
};

export default SignInButton;

const styles = StyleSheet.create({
  buttonCard: {
    backgroundColor: AppTheme.colors.surface,
    position: 'relative',
    bottom: 0,
    height: 108,
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: AppTheme.colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 15,
        borderTopWidth: 0.2,
        borderTopColor: 'lightgrey',
      },
    }),
  },
  button: {
    margin: '5%',
    backgroundColor: AppTheme.colors.primary,
    padding: '3%',
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    color: AppTheme.colors.black,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
