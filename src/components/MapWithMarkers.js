import React, { useEffect } from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function MapWithMarkers({ markersArray }) {
  const navigationHook = useNavigation();

  return (
    <MapView
      style={{
        flex: 1,
      }}
      initialRegion={{
        latitude: 63.421615,
        longitude: 10.395053,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
      }}
    >
      {markersArray.map((m, i) => (
        <Marker
          coordinate={m.latLong}
          title={m.title}
          description={m.shortDescription + " - " + m.pressForMoreInfo}
          key={`marker-${i}`}
          //when navigating to new page; key, logo and information parameters are passed with the navigation.
          onCalloutPress={() =>
            navigationHook.navigate("MarkerInfoScreen", {
              itemId: m.key,
              itemTitle: m.title,
              itemPicture: m.logo,
              itemInformation: m.information,
              itemPhotographer: m.photographer,
            })
          }
        >
          <Image
            style={styles.image}
            source={require("../assets/ExploreTrondheim/ExploreTRDMarkerW.png")}
          />
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: width,
    height: height,
  },
  transparentBox: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: width - 30,
    backgroundColor: "transparent",
    resizeMode: "resize",
  },
  image: {
    resizeMode: "contain",
    width: width * 0.1,
    height: width * 0.1,
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
  darkPurpleFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#99499C",
    borderColor: "#C5A2CC",
    borderRadius: 50,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
});
