import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { SignInScreen, SignUpScreen, ResetPasswordScreen } from '../screens/auth';

const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen}/>
    <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen}/>
    <Stack.Screen name={AppRoute.RESET_PASSWORD} component={ResetPasswordScreen}/>
  </Stack.Navigator>
);