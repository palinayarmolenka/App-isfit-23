// import * as React from 'react';
import React, {useRef, useEffect} from 'react';
import { Text, View, StyleSheet, Animated, Easing, backgroundFade, logoFade, logoMovement } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import EventScreen from './src/screens/EventScreen';
import MapScreen from './src/screens/MapScreen';
import ThemeScreen from './src/screens/ThemeScreen';
import FAQScreen from './src/screens/FAQScreen';
import InformationScreen from './src/screens/InformationScreen';
import MarkerInfoScreen from './src/screens/MarkerInfoScreen';

const MapsStack = createStackNavigator();
//Make to have a visible tabbar on these screens
function MapsStackScreen() {
  return (
    <MapsStack.Navigator screenOptions={{ headerShown: false }}>
      <MapsStack.Screen name="MapsScreen" component={MapScreen} />
      <MapsStack.Screen name="MarkerInfoScreen" component={MarkerInfoScreen} />
    </MapsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Events" 
      component={EventScreen}
      options={{
        headerTintColor: "#FFFF",
        backgroundColor: "#2596BE",
        headerStyle: {
          backgroundColor: "#1164A3",
        },
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="calendar" size={20} color={color} />
        ),
      }} />
      <Tab.Screen name="Theme" 
      component={ThemeScreen}
      options={{
        headerTintColor: "#FFFF",
        headerStyle: {
          backgroundColor: "#F78D1F",
        },
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="map" size={20} color={color} />
        ),
      }} />
      <Tab.Screen name="Map" 
      component={MapsStackScreen}
      options={{
        headerTitle: "Explore Trondheim",
        headerTintColor: "#FFFF",
        headerStyle: {
          backgroundColor: "#99499C",
        },
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="map" size={20} color={color} />
        ),
      }} />
      <Tab.Screen name="FAQ" 
      component={FAQScreen}
      options={{
        headerTintColor: "#FFFFFF",
        headerStyle: {
          backgroundColor: "#0197CC",
        },
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
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="HomeTabs" component={HomeTabs} />
        <MainStack.Screen name="Info" component={InformationScreen} />
        <MainStack.Screen name="Show" component={EventScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'orange',
     opacity: backgroundFade,
  },
  logo: {
     color: 'white',
     fontSize: 48,
     fontWeight: 'bold',
     opacity: logoFade,
     transform: [{translateY: logoMovement}],
  },
});
export default App;




