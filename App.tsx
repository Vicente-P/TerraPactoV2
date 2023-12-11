import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashSreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* Puedes agregar más pantallas aquí según sea necesario */}
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default StackNavigator;
