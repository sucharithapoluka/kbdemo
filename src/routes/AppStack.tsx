import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Menu from '@components/menu/Menu';
import DashboardLayout from '@screens/dashboard-layout/DashboardLayout';
import Home from '@screens/home/Home';
import AppAcknowledgement from '@screens/legal-disclosure/AppUsage';
import { TermsOfService } from '@screens/legal-disclosure/TermsOfService';
import CreateMessage from '@screens/messages/CreateMessage';
import EditMessage from '@screens/messages/EditMessage';
import StatusMessage from '@screens/messages/StatusMessage';
import Camera from '@screens/photos/Camera';
import Review from '@screens/photos/Review';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LegalDisclosure'
        component={TermsOfService}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='AppAcknowledgement'
        component={AppAcknowledgement}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Menu'
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='DashboardLayout'
        component={DashboardLayout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CreateMessage'
        component={CreateMessage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='EditMessage'
        component={EditMessage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Camera'
        component={Camera}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='PhotosReview'
        component={Review}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='StatusMessage'
        component={StatusMessage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
