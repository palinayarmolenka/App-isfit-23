import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { attractionMarkers } from "../assets/attractionMarkers";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function MapScreen () {

  const navigation = useNavigation();
  return (
    <View style={{
      flex: 1,
    }}>
      <MapView style={{
        flex: 1,
      }}
      initialRegion = {{
        latitude: 63.421615,
        longitude: 10.395053,
        latitudeDelta: 0.040,
        longitudeDelta: 0.05
      }}>
      {
      attractionMarkers.map((m, i) =>
          <Marker
            coordinate={m.latLong}
            title={m.title}
            description={m.shortDescription}
            key={`marker-${i}`}
            //when navigating to new page; key, logo and information parameters are passed with the navigation.
            onCalloutPress={() =>
              navigation.navigate('MarkerInfoScreen', {
                itemId: m.key, itemTitle: m.title, itemPicture: m.logo, itemInformation: m.information, itemPhotographer: m.shortDescription
              },
              )}
          >
            <Image style={styles.image} source={require("../assets/exploreTrondheim.png")} />
          </Marker>
        )}
      </MapView>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={styles.scroll}
        contentContainerStyle={{paddingRight: 20}}
      >

        <TouchableOpacity style={styles.itemAll}>
          <Ionicons size={15} name='options-outline'>  Tout</Ionicons>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemRestaurant} onPress={onlyRestaurant}>
          <Ionicons size={15} name='restaurant-outline'>  Restaurant</Ionicons>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemHotel}>
          <Ionicons size={15} name='bed-outline'>  Hôtel</Ionicons>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemCommerce}>
          <Ionicons size={15} name='cart-outline'>  Commerce</Ionicons>
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    width: width,
    height: height,
  },
  transparentBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: width - 30,
    backgroundColor: 'transparent',
  },
  image: {
    resizeMode: "contain",
    width: width * 0.8,
    height: width * 0.12,
  },
});