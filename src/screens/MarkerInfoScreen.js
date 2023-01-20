import React from "react";
import { View, Dimensions, ScrollView, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { FontAwesome, Feather } from '@expo/vector-icons';
import MarkerInfo from "../components/MarkerInfo";
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

//gets right params from the navigaton in MapScreen and through route prop. 
const MarkerInfoScreen = ({ route, navigation }) => {

  const { itemId, itemTitle, itemPicture, itemInformation, itemPhotographer } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("MapsScreen")}>
          <Feather name="arrow-left" size={40} color="#3939" />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingTop: 4, paddingRight: 4}}
        onPress={() => {storeFavorites(itemId)}}>
            <FontAwesome name="heart-o" size={35} color="#3939"/>
        </TouchableOpacity>
      </View>
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

// TODO: refactor to be used to store favorite markers and events
const storeFavorites = async (markerKey) => {
  try {
    getStoredFavorites()
    .then((storedFavorites) => {

      storedFavorites.push(markerKey)
      const jsonValue = JSON.stringify(storedFavorites)
      AsyncStorage.setItem('@ISFiTApp23_FavoriteMarkers', jsonValue)
      .then(() => Alert.alert("Saved to favorite places!"))

    })
  } catch (e) {
    console.log(e)
  }
}

// TODO: refactor to be used to store favorite markers and events
const getStoredFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@ISFiTApp23_FavoriteMarkers")
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch(e) {
    console.log(e)
    return []
  }
}

const styles = StyleSheet.create({
  
  topButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})

export default MarkerInfoScreen;