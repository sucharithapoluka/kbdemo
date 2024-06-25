import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { AuthProvider } from './src/contexts/Auth';
import { Route } from './src/routes/Route';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <AuthProvider>
      <Route />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
