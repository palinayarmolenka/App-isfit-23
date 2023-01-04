import React from "react";
import { View, Dimensions, ScrollView, Text } from "react-native";
import MarkerInfo from "../components/MarkerInfo";
import Header from "../components/Header";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

//gets right params from the navigaton in MapScreen and through route prop. 
const MarkerInfoScreen = ({ route, navigation }) => {

  const { itemId, itemPicture, itemInformation, itemPhotographer } = route.params;

  return (
    <View style={{ flex: 1 }}>

      <ScrollView>
      <Text>AAA: {route.itemPhotographer}- {itemId} TODO</Text>
        <MarkerInfo
          key={itemId}
          text={itemId}
          bilde={itemPicture}
          information={itemInformation}
          photographer={itemPhotographer}
        />
      </ScrollView>
    </View >
  );
}

export default MarkerInfoScreen;