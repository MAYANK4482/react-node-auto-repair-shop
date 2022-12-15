import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
} from 'react-native';
import MapViewscr from '../MapViewscr';

const M_Location = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <MapViewscr></MapViewscr>
    </View>
  );
};

export default M_Location;
