import { UserData } from '../models/UserData';
import { TENET_ID, CLIENT_ID } from "@env";
import AzureAuth from 'react-native-azure-auth';

const azureAuth = new AzureAuth({
    clientId: CLIENT_ID,
    tenant: TENET_ID,
});

async function AzureAdLogin(): Promise<UserData | undefined> {
    try {
        const result = await azureAuth.webAuth.authorize({ scope: 'openid profile email' });
        if (result != null && result.accessToken) {
            let userInfo = await azureAuth.auth.msGraphRequest({ token: result.accessToken, path: '/me' });
            let userData: UserData = {
                name: userInfo.displayName,
                email: userInfo.mail,
                token: result.accessToken
            }
            return userData;
        }
    }
    catch (error) {
        console.log('Authorization Error:', error);
    }
    return undefined;
}

export default AzureAdLogin;

