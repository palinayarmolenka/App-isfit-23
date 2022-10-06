import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Header from '../components/Header';
import { attractionMarker } from "../assets/attractionMarker";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function MapScreen () {

  const markers = [
    {
      latitude: 63.42856936726488,
      longitude: 10.402574056452902,
      },
  ];

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
        latitudeDelta: 0.062,
        longitudeDelta: 0.05
      }}>
      {
        markers.map((val) => (
          <Marker coordinate={{
            latitude : val.latitude,
            longitude : val.longitude
          }}>
            <Image style={styles.image} source={require("../assets/exploreTrondheim.png")} />
          </Marker>
        ))
      }
      </MapView>
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