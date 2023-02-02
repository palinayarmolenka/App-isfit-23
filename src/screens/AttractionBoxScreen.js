import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { View, ScrollView, Dimensions, Component } from "react-native";
import { attractionMarkers } from "../assets/attractionMarkers";
import AttractionMarkerBox from "../components/AttractionMarkerBox";


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const defaultFilter = "Trondheim";

export default class AttractionBoxScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      activeFilter: defaultFilter,
      activeMarkers: attractionMarkers.filter(
        (x) => x.filterKey == defaultFilter
      ),
    };
  }
 
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{backgroundColor: '#D8BFD8', paddingVertical: 4,  }}>
          <ScrollView horizontal={true}>
            <TouchableOpacity
              style={styles.purpleFilterButton}
              onPress={() => this.onFilterChange("Favorites")}
            >
              <Text>Favorites</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.blueFilterButton}
              onPress={() => this.onFilterChange(defaultFilter)}
            >
              <Text>Trondheim 101</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.redFilterButton}
              onPress={() => this.onFilterChange("Help")}
            >
              <Text>Help</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.orangeFilterButton}
              onPress={() => this.onFilterChange("Cafes")}
            >
              <Text>Cafés to relax in</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.orangeFilterButton}
              onPress={() => this.onFilterChange("Eat")}
            >
              <Text>Places to eat</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.orangeFilterButton}
              onPress={() => this.onFilterChange("Drink")}
            >
              <Text>Places to drink</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.greenFilterButton}
              onPress={() => this.onFilterChange("FreshAir")}
            >
              <Text>Fresh air</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.greenFilterButton}
              onPress={() => this.onFilterChange("Activities")}
            >
              <Text>Activity for the body and soul</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.pinkFilterButton}
              onPress={() => this.onFilterChange("Shopping")}
            >
              <Text>Boutiques & Vintage shopping</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.purpleFilterButton}
              onPress={() => this.onFilterChange("Museums")}
            >
              <Text>Museums</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.yellowFilterButton}
              onPress={() => this.onFilterChange("Party")}
            >
              <Text>Party places</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
          <ScrollView ref={scrollRef}>
          {attractionMarkers.map((m, i) =>
            <AttractionMarkerBox
              filterKey={m.filterKey}
              title={m.title}
              shortDescription={m.shortDescription}
              pressForMoreInfo={m.pressForMoreInfo}
              photographer={m.photographer}
              info={m.info}
              logo={m.logo}
              information={m.information} 
            />
          )}
          </ScrollView>
      </View>
    );
  }

  onFilterChange(filter) {
    var filteredMarkersList = [];
    if (filter == "Favorites") {
      getStoredFavorites().then((storedFavorites) => {
        filteredMarkersList = attractionMarkers.filter((x) =>
          storedFavorites.includes(x.key)
        );
        this.setState({
          activeFilter: filter,
          activeMarkers: filteredMarkersList,
        });
      });
    } else {
      filteredMarkersList = attractionMarkers.filter(
        (x) => x.filterKey == filter
      );
      // Close open marker
      this.setState({
        activeFilter: filter,
        activeMarkers: filteredMarkersList,
      });
    }
  }
}

// TODO: refactor to be used to store favorite markers and events
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