import React from "react";
import { View, Dimensions, ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';
import MarkerInfo from "../components/MarkerInfo";
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

//gets right params from the navigaton in MapScreen and through route prop. 
const MarkerInfoScreen = ({ route, navigation }) => {

  const { itemId, itemTitle, itemPicture, itemInformation, itemPhotographer } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal={true}>
        <TouchableOpacity onPress={() => navigation.navigate("MapsScreen")}>
          <View>
            <Ionicons name="ios-arrow-back" size={40} color="#3939" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingLeft: width * 0.8}}
        onPress={() => {storeData(itemId) ; Alert.alert(itemTitle + " was added to favorite places!")}}>
          <View>
            <Feather name="heart" size={40} color="#3939" />
          </View>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView>
      <Text>
        <MarkerInfo
          key={itemId}
          title={itemTitle}
          text={itemId}
          bilde={itemPicture}
          information={itemInformation}
          photographer={itemPhotographer}
        />
      </Text>
      </ScrollView>
    </View >
  );
}

const storeData = async (value) => {
  try {
    // need to getData here but cannot operate with Promises
    var favorites = null
    AsyncStorage.getItem('@ISFiTApp23_Favorites').then((res) => console.log(res))
    if (favorites == null){
      favorites = [value]
    }
    else{
      favorites.push(value)
    }
    const jsonValue = JSON.stringify(favorites)
    await AsyncStorage.setItem('@ISFiTApp23_Favorites', jsonValue)
  } catch (e) {
    throw ("Unable to save favorites to device storage.")
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@ISFiTApp23_Favorites')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    throw ("Unable to read favorites from device storage.")
  }
}


export default MarkerInfoScreen;