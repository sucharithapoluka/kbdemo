import { CLIENT_ID, TENANT_ID } from '@env';
import AzureAuth from 'react-native-azure-auth';

import { UserData } from '@models/UserInfo';

const azureAuth = new AzureAuth({
  clientId: CLIENT_ID,
  tenant: TENANT_ID,
});

const AzureAdLogin = async (): Promise<UserData | undefined> => {
  try {
    const result = await azureAuth.webAuth.authorize({
      scope: 'openid profile email',
    });

    if (result != null && result.rawIdToken && result.accessToken) {
      const userInfo = await azureAuth.auth.msGraphRequest({
        token: result.accessToken,
        path: '/me',
      });

      const userData: UserData = {
        id: result.userId,
        name: userInfo.displayName,
        email: userInfo.mail,
        token: result.rawIdToken,
        tokenExpiration: result.idTokenExpireOn
      };
      return userData;
    }
  }
  catch (error) {
    console.log('Authorization Error:', error);
  }
  return undefined;
}

const AzureAdClearSession = async (): Promise<boolean> => {
  let sessionCleared = false;
  try {
    await azureAuth.webAuth.clearSession({ closeOnLoad: true });
    sessionCleared = true;
  }
  catch (error) {
    console.log('Clear session Error:', error);
  }
  return sessionCleared;
}

const RefreshToken = async (userData: UserData): Promise<UserData | null> => {
  try {
    if (userData && userData.tokenExpiration) {
      const currentDate = new Date();
      const tokenExpired = userData.tokenExpiration < currentDate.getTime();

      if (tokenExpired) {
        const refreshTokenRes = await azureAuth.auth.acquireTokenSilent({ userId: userData.id, scope: 'openid profile email' });
        if (refreshTokenRes) {
          userData.token = refreshTokenRes.rawIdToken;
          userData.tokenExpiration = refreshTokenRes.idTokenExpireOn;
          return userData;
        }
      }
      else {
        return userData;
      }
    }
  }
  catch (error) {
    console.log(error);
  }
  return null;
}

export { AzureAdClearSession, AzureAdLogin, RefreshToken };

