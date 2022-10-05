import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from "@expo/vector-icons";
import EventScreen from './src/screens/EventScreen';
import MapScreen from './src/screens/MapScreen';
import ThemeScreen from './src/screens/ThemeScreen';
import FAQScreen from './src/screens/FAQScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Events" 
        component={EventScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map" size={20} color={color} />
          ),
        }} />
        <Tab.Screen name="Theme" 
        component={ThemeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map" size={20} color={color} />
          ),
        }} />
        <Tab.Screen name="Map" 
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map" size={20} color={color} />
          ),
        }} />
        <Tab.Screen name="FAQ" 
        component={FAQScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map" size={20} color={color} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




