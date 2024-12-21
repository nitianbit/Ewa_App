// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../app/(tabs)/dashboard'
import AdminPanelScreen from '../screens/AdminPanelScreen';
import PhoneAuthScreen from '../screens/PhoneAuthScreen'; // Placeholder
import PhoneLoginScreen from '../screens/PhoneLoginScreen'; // Placeholder
import ServicesScreen from '../app/(tabs)/services'
import ServiceDetailScreen from '../app/(tabs)/ServiceDetail'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Registration">
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="dashboard" component={dashboard} />

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PhoneAuth" component={PhoneAuthScreen} />
      <Stack.Screen name="PhoneLogin" component={PhoneLoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AdminPanel" component={AdminPanelScreen} />
      <Stack.Screen name="dashboard" component={DashboardScreen} />
      <Stack.Screen name="services" component={ServicesScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
