import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

import DatabaseInitializer from '@routes/DatabaseInitializer';

import { AuthProvider } from './src/contexts/Auth';
import { Route } from './src/routes/Route';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <DatabaseInitializer />
      <Route />
    </AuthProvider>
  );
}

export default App;
