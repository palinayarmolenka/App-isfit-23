import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { attractionMarkers } from "../assets/attractionMarkers";
import AttractionMarkerBox from "../components/AttractionMarkerBox";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const defaultFilter = "Trondheim";

export default function AttractionBoxScreen({ navigation }) {
  const scrollRef = useRef();

  const [state, setState] = useState({
    activeFilter: defaultFilter,
    activeMarkers: attractionMarkers.filter(
      (x) => x.filterKey == defaultFilter
    ),
  });

  useEffect(() => {
    navigation.addListener("focus", () => {
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
    });
  }, [navigation]);

  const onFilterChange = (filter) => {
    var filteredMarkersList = [];
    if (filter == "Favorites") {
      getStoredFavorites().then((storedFavorites) => {
        filteredMarkersList = attractionMarkers.filter((x) =>
          storedFavorites.includes(x.key)
        );
        setState({
          activeFilter: filter,
          activeMarkers: filteredMarkersList,
        });
      });
    } else {
      filteredMarkersList = attractionMarkers.filter(
        (x) => x.filterKey == filter
      );
      // Close open marker
      setState({
        activeFilter: filter,
        activeMarkers: filteredMarkersList,
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#FFF", paddingVertical: 4 }}>
        <ScrollView horizontal={true}>
          <TouchableOpacity
            style={styles.purpleFilterButton}
            onPress={() => onFilterChange("Favorites")}
          >
            <Text>Favorites</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.blueFilterButton}
            onPress={() => onFilterChange(defaultFilter)}
          >
            <Text>Trondheim 101</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.redFilterButton}
            onPress={() => onFilterChange("Help")}
          >
            <Text>Help</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.orangeFilterButton}
            onPress={() => onFilterChange("Cafes")}
          >
            <Text>Cafés to relax in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.orangeFilterButton}
            onPress={() => onFilterChange("Eat")}
          >
            <Text>Places to eat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.orangeFilterButton}
            onPress={() => onFilterChange("Drink")}
          >
            <Text>Places to drink</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.greenFilterButton}
            onPress={() => onFilterChange("FreshAir")}
          >
            <Text>Fresh air</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.greenFilterButton}
            onPress={() => onFilterChange("Activities")}
          >
            <Text>Activity for the body and soul</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.pinkFilterButton}
            onPress={() => onFilterChange("Shopping")}
          >
            <Text>Boutiques & Vintage shopping</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.purpleFilterButton}
            onPress={() => onFilterChange("Museums")}
          >
            <Text>Museums</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.yellowFilterButton}
            onPress={() => onFilterChange("Party")}
          >
            <Text>Party places</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView ref={scrollRef}>
        {state.activeMarkers.map((m, i) => {
          return (
            <AttractionMarkerBox
              key={i}
              filterKey={m.filterKey}
              title={m.title}
              shortDescription={m.shortDescription}
              logo={m.logo}
              photographer={m.photographer}
              info={m.info}
              information={m.information}
              latLong={m.latLong}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const getStoredFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@ISFiTApp23_FavoriteMarkers");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

const styles = StyleSheet.create({
  mapStyle: {
    width: width,
    height: height,
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
    borderRadius: 18,
    marginHorizontal: 2,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  blueFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#7CD1ED",
    borderColor: "#0197CC",
    borderRadius: 18,
    marginHorizontal: 2,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  orangeFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#FFAD33",
    borderColor: "#F78D1F",
    borderRadius: 18,
    marginHorizontal: 2,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  greenFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#56BC72",
    borderColor: "#37894E",
    borderRadius: 18,
    marginHorizontal: 2,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  purpleFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#B77FB9",
    borderColor: "#99499C",
    borderRadius: 18,
    marginHorizontal: 2,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  pinkFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#F087AA",
    borderColor: "#E63872",
    borderRadius: 18,
    marginHorizontal: 2,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  yellowFilterButton: {
    alignSelf: "flex-start",
    elevation: 4,
    backgroundColor: "#F0BD69",
    borderColor: "#EAA22A",
    borderRadius: 18,
    marginHorizontal: 2,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
});
