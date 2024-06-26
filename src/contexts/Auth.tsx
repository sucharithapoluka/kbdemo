import React, { createContext, useContext, useEffect, useState } from 'react';

import * as Keychain from 'react-native-keychain';

import { UserData } from '@models/UserInfo';
import {
  AzureAdClearSession,
  AzureAdLogin,
  RefreshToken,
} from '@services/AzureAdAuth';

const appUserUserDetailsKey = '@KBHAuthUser';
const service = '@KBHUserAuthService';

type AuthContextData = {
  authData?: UserData;
  loading: boolean;
  signIn(): Promise<UserData | undefined>;
  refreshToken(): Promise<boolean>;
  signOut(): void;
  saveAuthData(userData?: UserData): Promise<void>;
};

//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

async function loadUserData(): Promise<UserData | undefined> {
  try {
    //Try get the data from Async Storage
    const userAuthDataCreds = await Keychain.getGenericPassword({ service });
    if (userAuthDataCreds) {
      //If there are data, it's converted to an Object and the state is updated.
      const authData: UserData = JSON.parse(userAuthDataCreds.password);
      return authData;
    }
  } catch (error) {
    /* empty */
  }
  return undefined;
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authData, setAuthData] = useState<UserData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorage function.
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const userAuthData = await loadUserData();
      if (userAuthData != undefined) {
        setAuthData(userAuthData);
      } else {
        setAuthData(undefined);
      }
    } catch (error) {
      /* empty */
    } finally {
      //loading finished
      setLoading(false);
    }
  }

  const signIn = async (): Promise<UserData | undefined> => {
    try {
      setLoading(true);
      const userData = await AzureAdLogin();
      if (userData != null && userData != undefined) {
        await saveAuthData(userData);
        return userData;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => setLoading(false), 2000); // Set loading to false after 3 seconds
    }
    return undefined;
  };

  const saveAuthData = async (userData?: UserData): Promise<void> => {
    try {
      if (userData != null && userData != undefined) {
        //Set the data in the context, so the App can be notified
        //and send the user to the AuthStack
        setAuthData(userData);

        //Persist the data in the Async Storage
        //to be recovered in the next user session.
        Keychain.setGenericPassword(
          appUserUserDetailsKey,
          JSON.stringify(userData),
          { service },
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshToken = async (): Promise<boolean> => {
    try {
      if (authData) {
        const refreshTokenRes = await RefreshToken(authData);
        if (refreshTokenRes) {
          return true;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  const signOut = async () => {
    const clearSession = await AzureAdClearSession();

    if (clearSession) {
      //Remove data from context, so the App can be notified
      //and send the user to the AuthStack
      setAuthData(undefined);
      //Remove the data from Async Storage
      //to NOT be recoverede in next session.
      await Keychain.resetGenericPassword({ service });
    }
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider
      value={{ authData, loading, signIn, refreshToken, signOut, saveAuthData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    console.log('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, loadUserData, useAuth };
