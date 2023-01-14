import React from "react";
import { View, Dimensions, ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import MarkerInfo from "../components/MarkerInfo";

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
        <TouchableOpacity onPress={() => Alert.alert(itemTitle + " was added to favorite places!")} style={{paddingLeft: width * 0.8}}>
          <View>
            <Ionicons name="ios-arrow-back" size={40} color="#3939" />
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

export default MarkerInfoScreen;