// app/layout.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FAB } from 'react-native-paper'; // Import Floating Action Button
import HomeScreen from './home';
import LoginScreen from './login';
import RegisterScreen from './register';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import the icon set
import DashboardScreen from './dashboard';
import ServicesScreen from './services';
import ServiceDetailScreen from './ServiceDetail';
import AppointmentsScreen from './appointment'
import ProfileScreen from './Profile';
const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <>
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#005a9c', tabBarInactiveTintColor: '#7d7d7d' }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <MaterialIcons name="home" color={color} size={24} /> }} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} options={{ tabBarIcon: ({ color }) => <MaterialIcons  name="receipt-long" size={30} color={color}  />}} />
      <Tab.Screen name="Wellness" component={RegisterScreen} options={{ tabBarIcon: ({ color }) => <MaterialIcons  name="receipt-long" size={30} color={color}  />}} />
      <Tab.Screen name="Services" component={ServicesScreen} options={{ tabBarIcon: ({ color }) => <MaterialIcons name="medical-services" color={color} size={24} /> }} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ tabBarIcon: ({ color }) => <MaterialIcons name="dashboard" color={color} size={24} /> }} />

          </Tab.Navigator>

      {/* Floating Call Button */}
      <FAB
        icon="phone"
        style={styles.fab}
        onPress={() => console.log('Call button pressed')}
        color="#ffffff"
        animated
      />
    </>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    padding: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    right:10, // Position above the tab bar
    alignSelf: 'center',
    borderRadius:30,
    backgroundColor: '#1dbf73', // Color for the FAB
  },
});
