
import React, {useState, useEffect} from 'react';


import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
const MapViewscr = () => {
  const [currentLongitude, setCurrentLongitude] = useState(37.4220936);
  const [currentLatitude, setCurrentLatitude] = useState(-122.083922);

  useEffect(() => {
    Geolocation.getCurrentPosition(val => {
      console.log(JSON.stringify(val.coords));
      setCurrentLatitude(val.coords.latitude);
      setCurrentLongitude(val.coords.longitude);
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: currentLatitude,
            longitude: currentLongitude,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          title="Mayank"
          description="{marker.description}"
        />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 25,
    color: 'red',
    marginVertical: 16,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 25,
    color: 'red',
    marginVertical: 16,
  },
});

export default MapViewscr;
