import { View, Text } from 'react-native';
import React from 'react';
import Registration from './src/component/Registration';
import Login from './src/component/Login';
import Home from './src/component/Home';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableScreens } from 'react-native-screens';

enableScreens(true);


const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="registration" component={Registration} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
