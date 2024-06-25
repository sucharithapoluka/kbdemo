import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Loading } from '@components/common/Loading';
import { useAuth } from '@contexts/Auth';
import SuccessSplash from '@screens/sign-in/SuccessSplash';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export const Route = () => {
  const { authData, loading, refreshToken } = useAuth();

  if (authData) {
    const currentDate = new Date();
    const tokenExpired = authData.tokenExpiration
      ? authData.tokenExpiration < currentDate.getTime()
      : true;

    if (tokenExpired) {
      refreshToken();
    }
  }

  if (authData && loading) {
    return <SuccessSplash />;
  } else if (!authData && loading) {
    return <Loading />;
  } else {
    return (
      <NavigationContainer>
        {authData ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
  }
};
