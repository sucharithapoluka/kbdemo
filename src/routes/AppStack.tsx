import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AppAcknowledgement from '../screens/AppAcknowledgement';
import { LegalDisclosure } from '../screens/LegalDisclosure';
import Menu from '../components/Menu';
import CreateMessage from '../screens/messages/CreateMessage';
import EditMessage from '../screens/messages/EditMessage';
import DashboardLayout from '../screens/DashboardLayout';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LegalDisclosure"
        component={LegalDisclosure}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppAcknowledgement"
        component={AppAcknowledgement}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DashboardLayout"
        component={DashboardLayout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateMessage"
        component={CreateMessage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditMessage"
        component={EditMessage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
