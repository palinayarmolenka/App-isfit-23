import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5, Entypo, FontAwesome } from "@expo/vector-icons";
import EventScreen from "./src/screens/EventScreen";
import MapScreen from "./src/screens/MapScreen";
import ThemeScreen from "./src/screens/ThemeScreen";
import FAQScreen from "./src/screens/FAQScreen";
import InformationScreen from "./src/screens/InformationScreen";
import MarkerInfoScreen from "./src/screens/MarkerInfoScreen";
import AttractionBoxScreen from "./src/screens/AttractionBoxScreen";
import AttractionBoxInfoScreen from "./src/screens/AttractionBoxInfoScreen";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

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

const AttractionStack = createStackNavigator();

function AttractionStackScreen() {
  return (
    <AttractionStack.Navigator screenOptions={{ headerShown: false }}>
      <AttractionStack.Screen name="AttractionBoxScreen" component={AttractionBoxScreen} />
      <AttractionStack.Screen name="AttractionBoxInfoScreen" component={AttractionBoxInfoScreen} />
    </AttractionStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={{
          headerTintColor: "#FFFF",
          backgroundColor: "#2596BE",
          headerStyle: {
            backgroundColor: "#E63872",
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={22} color={color} />
          ),
          tabBarActiveTintColor: "#E63872",
        }}
      />
      <Tab.Screen
        name="Theme"
        component={ThemeScreen}
        options={{
          headerTintColor: "#FFFF",
          headerStyle: {
            backgroundColor: "#F78D1F",
          },
          tabBarIcon: ({ color }) => (
            <Entypo name="megaphone" size={23} color={color} />
          ),
          tabBarActiveTintColor: "#F78D1F",
        }}
      />
      <Tab.Screen
        name="Explore"
        component={MapsStackScreen}
        options={{
          headerTitle: "Explore Trondheim",
          headerTintColor: "#FFFF",
          headerStyle: {
            backgroundColor: "#99499C",
          },
          tabBarIcon: ({ color }) => (
            <Entypo name="globe" size={23} color={color} />
          ),
          tabBarActiveTintColor: "#99499C",
        }}
      />
      <Tab.Screen
        name="Attractions"
        component={AttractionStackScreen}
        options={{
          headerTitle: "Explore Trondheim",
          headerTintColor: "#FFFF",
          headerStyle: {
            backgroundColor: "#99499C",
          },
          tabBarIcon: ({ color }) => (
            <Entypo name="globe" size={23} color={color} />
          ),
          tabBarActiveTintColor: "#99499C",
        }}
      />
      <Tab.Screen
        name="Information"
        component={FAQScreen}
        options={{
          headerTintColor: "#FFFFFF",
          headerStyle: {
            backgroundColor: "#0197CC",
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="question" size={20} color={color} />
          ),
          tabBarActiveTintColor: "#0197CC",
        }}
      />
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

//Own splashscreen that renders for 2 sek.
function SplashScreen(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.setLoading(!props.loading);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={{ backgroundColor: "#99499C", flex: 1 }}>
      <View>
        <Image
          style={styles.picture}
          source={require("./src/assets/launch_screen.png")}
        />
      </View>
    </View>
  );
}

export default () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen loading={loading} setLoading={setLoading} />;
  } else {
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
};

const styles = StyleSheet.create({
  titletext: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  randomText: {
    paddingTop: height * 0.01,
    fontSize: 16,
    color: "white",
  },
  picture: {
    alignSelf: "center",
    margin: width * 0.6,
    height: height * 0.26,
    size: 2,
    resizeMode: "contain",
  },
});
