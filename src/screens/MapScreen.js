import React from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Header from '../components/Header';

export default function MapScreen () {

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

      </MapView>
    </View>
  )
}