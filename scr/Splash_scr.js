import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;

const Splash_scr = ({navigation, route}) => {
  useEffect(() => {
    // console.log('AsyncStorag');

    setTimeout(() => {
      getTheme();
    }, 3000);
  });
  const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('U_id');
      if (value == null) {
        const value1 = await AsyncStorage.getItem('M_id');
        if (value1 == null) {
          console.log('Going Login Screen')
          navigation.navigate('Login_scr');
        } else {
          console.log('value  M', value);
          navigation.navigate('M_Home');
        }
      } else {
        console.log('value  U', value);
        navigation.navigate('U_Home');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.s_mainview}>
        <Image
          source={require('../Image/Main_Logo.jpg')}
          style={styles.logo}></Image>
        <Text style={styles.txtwel}>Well-Come</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  s_mainview: {
    flex: 1,
    backgroundColor: 'rgba(255,255, 255, 1.0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  L_mainview: {
    flex: 1,
    backgroundColor: 'rgba(255,255, 255, 1.0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: windowWidth * 0.7,
    width: windowWidth * 0.7,
  },
  txtwel: {
    fontSize: 20,
    color: 'black',
  },
});

export default Splash_scr;
