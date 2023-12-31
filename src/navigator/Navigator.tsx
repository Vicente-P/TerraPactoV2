import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashSreen';
import { MenuLateral } from './MenuLateral';
import AgendarMediador from '../screens/AgendarMediador';

const Stack = createNativeStackNavigator();


const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AgendarMediador" component={AgendarMediador} />
      <Stack.Screen name="MenuLateral" component={MenuLateral} />
    </Stack.Navigator>
  );
};

export default Navigator;
