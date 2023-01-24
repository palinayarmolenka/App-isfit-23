import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { attractionMarkers } from "../assets/attractionMarkers";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapWithMarkers from '../components/MapWithMarkers';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const defaultFilter = "Trondheim"

export default class MapScreen extends Component{

  
  constructor(props) {
      super(props);
      this.state = { 
        data: props.data,
        activeFilter: defaultFilter,
        activeMarkers: attractionMarkers.filter(x => x.filterKey == defaultFilter)
      }
  }

  render() {

    return (
      <View style={{
        flex: 1,
      }}>
        <View style={{height: 55, backgroundColor: "#3a243b", paddingTop: 4}}>
          <ScrollView horizontal={true} style={{paddingTop: 4}}>
  
          <TouchableOpacity style={styles.purpleFilterButton}
          onPress={() => this.onFilterChange("Favorites")}>
              <Text>Favorites</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.blueFilterButton}
            onPress={() => this.onFilterChange(defaultFilter)}>
              <Text>Trondheim 101</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.redFilterButton} 
            onPress={() => this.onFilterChange("Help")}>
              <Text>Help</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.orangeFilterButton}
            onPress={() => this.onFilterChange("Cafes")}>
              <Text>Cafés to relax in</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.orangeFilterButton}
            onPress={() => this.onFilterChange("Eat")}>
              <Text>Places to eat</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.orangeFilterButton}
            onPress={() => this.onFilterChange("Drink")}>
              <Text>Places to drink</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.greenFilterButton}
            onPress={() => this.onFilterChange("FreshAir")}>
              <Text>Fresh air</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.greenFilterButton}
            onPress={() => this.onFilterChange("Activities")}>
              <Text>Activity for the body and soul</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.pinkFilterButton}
            onPress={() => this.onFilterChange("Shopping")}>
              <Text>Boutiques & Vintage shopping</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.purpleFilterButton}
            onPress={() => this.onFilterChange("Museums")}>
              <Text>Museums</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.yellowFilterButton}
            onPress={() => this.onFilterChange("Party")}>
              <Text>Party places</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <MapWithMarkers markersArray={this.state.activeMarkers} >
        </MapWithMarkers>
      </View>
    )
  }

  onFilterChange(filter) {
    var filteredMarkersList = [];
    if (filter == "Favorites"){ 
      getStoredFavorites()
      .then((storedFavorites) => {
        filteredMarkersList = attractionMarkers.filter(x => storedFavorites.includes(x.key))
        this.setState({
          activeFilter: filter,
          activeMarkers: filteredMarkersList
        })
      })
    } 
    else{
      filteredMarkersList = attractionMarkers.filter(x => x.filterKey == filter)
      this.setState({
        activeFilter: filter,
        activeMarkers: filteredMarkersList
      })
    }
  }
}

// TODO: refactor to be used to store favorite markers and events
const getStoredFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@ISFiTApp23_FavoriteMarkers")
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch(e) {
    console.log(e)
    return []
  }
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
  }
});