import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import EventScreen from './src/screens/EventScreen';
import MapScreen from './src/screens/MapScreen';
import ThemeScreen from './src/screens/ThemeScreen';
import FAQScreen from './src/screens/FAQScreen';
import InformationScreen from './src/screens/InformationScreen';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Events" 
      component={EventScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="calendar" size={20} color={color} />
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
        headerTitle: "Explore Trondheim",
        headerStyle: {
          backgroundColor: "#2596BE",
        },
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="map" size={20} color={color} />
        ),
      }} />
      <Tab.Screen name="FAQ" 
      component={FAQScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="question" size={20} color={color} />
        ),
      }} />
    </Tab.Navigator>
    
  );
}

//creates the main stack navigation for the app and removes the default header
const MainStack = createStackNavigator();
//get white default backgroundcolor on all pages


function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none">
        <MainStack.Screen name="HomeTabs" component={HomeTabs} />
        <MainStack.Screen name="Info" component={InformationScreen} />
        <MainStack.Screen name="Show" component={EventScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
export default App;




