import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
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
      <View style={{backgroundColor: "#2A122C", paddingLeft: 10, paddingTop: 8}}>
        <Text style={{color: "#FFFFFF", fontSize: 18}}>Filter:</Text>
      </View>
      <View style={{height: 55, backgroundColor: "#2A122C"}}>
        <ScrollView horizontal={true} style={{paddingTop: 4}}>
          <TouchableOpacity style={styles.blueFilterButton}
          onPress>
            <Text>Trondheim 101</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.redFilterButton}>
            <Text>Help</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.orangeFilterButton}>
            <Text>Cafés to relax in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.orangeFilterButton}>
            <Text>Places to eat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.orangeFilterButton}>
            <Text>Places to drink</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.greenFilterButton}>
            <Text>Fresh air</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.greenFilterButton}>
            <Text>Activity for the body and soul</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pinkFilterButton}>
            <Text>Boutiques & Vintage shopping</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.purpleFilterButton}>
            <Text>Museums</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.yellowFilterButton}>
            <Text>Party places</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

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
  redFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#FF7B7B",
    borderColor: "#A70000",
    borderRadius: 50,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  blueFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#7CD1ED",
    borderColor: "#0197CC",
    borderRadius: 50,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  orangeFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#FFAD33",
    borderColor: "#F78D1F",
    borderRadius: 50,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  greenFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#56BC72",
    borderColor: "#37894E",
    borderRadius: 50,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  purpleFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#B77FB9",
    borderColor: "#99499C",
    borderRadius: 50,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  pinkFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#F087AA",
    borderColor: "#E63872",
    borderRadius: 50,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  yellowFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#F0BD69",
    borderColor: "#EAA22A",
    borderRadius: 50,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
});