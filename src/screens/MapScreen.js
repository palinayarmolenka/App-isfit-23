import React, { Component, useState } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Marker } from 'react-native-maps';
import { attractionMarkers } from "../assets/attractionMarkers";
import { useNavigation } from "@react-navigation/native";
import MapOnly from '../components/MapOnly';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default class MapScreen extends Component{

  constructor(props) {
      super(props);
      this.state = { 
        data: props.data,
        filterKey: "Trondheim"
      }
  }

  render() {

    return (
      <View style={{
        flex: 1,
      }}>
        <View style={{backgroundColor: "#2A122C", paddingLeft: 10, paddingTop: 8}}>
          <Text style={{color: "#FFFFFF", fontSize: 18}}>Filter:</Text>
        </View>
        <View style={{height: 55, backgroundColor: "#2A122C"}}>
          <ScrollView horizontal={true} style={{paddingTop: 4}}>
  
          <TouchableOpacity style={styles.darkPurpleFilterButton}
          onPress={() => this.setState({filterKey: "Favorites"})}>
              <Text>Favorites</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.blueFilterButton}
            onPress={() => this.setState({filterKey: "Trondheim"})}>
              <Text>Trondheim 101</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.redFilterButton} 
            onPress={() => this.setState({filterKey: "Help"})}>
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
        <MapOnly filterKey={this.state.filterKey} >
        </MapOnly>
      </View>
    )
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