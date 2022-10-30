import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { attractionMarkers } from "../assets/attractionMarkers";
import { useNavigation } from "@react-navigation/native";

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
                screen: 'Map',
                params: { itemId: m.key, itemPicture: m.logo, itemInformation: m.information, itemPhotographer: m.description }
              },
              )}
          >
            <Image style={styles.image} source={require("../assets/exploreTrondheim.png")} />
          </Marker>
        )}
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