import React from "react";
import { View, Dimensions, ScrollView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import MarkerInfo from "../components/MarkerInfo";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

//gets right params from the navigaton in MapScreen and through route prop. 
const MarkerInfoScreen = ({ route, navigation }) => {

  const { itemId, itemTitle, itemPicture, itemInformation, itemPhotographer } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate("MapsScreen")}>
            <View>
              <Ionicons name="ios-arrow-back" size={40} color="#3939" />
            </View>
      </TouchableOpacity>
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

export default MarkerInfoScreen;