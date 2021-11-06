import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
import { TodoNavigator } from './todo.navigator';
import { AppRoute } from './app-routes';

const Stack = createStackNavigator();

export const AppNavigator = (props) => (
  <Stack.Navigator {...props} screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator}/>
    <Stack.Screen name={AppRoute.HOME} component={TodoNavigator}/>
  </Stack.Navigator>
);