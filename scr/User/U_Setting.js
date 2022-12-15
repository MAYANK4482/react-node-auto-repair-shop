import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
  ScrollView,
} from 'react-native';

const U_Setting = ({navigation, route}) => {
  return (
    <View style={styles.contanin}>
      <Text style={styles.textWithShadow}>Setting</Text>
      <View style={styles.dashline} />
      <ScrollView style={styles.mainview}>
        <TouchableOpacity style={styles.btnnext} onPress={() => {
                   navigation.navigate('U_Profile');
        }}>
          <Text style={styles.txtnext}>PROFILE</Text>
        </TouchableOpacity>
        <View style={styles.dashline} />
        <TouchableOpacity style={styles.btnnext} onPress={() => {
          navigation.navigate('U_Car_All');
        }}>
          <Text style={styles.txtnext}>CAR</Text>
        </TouchableOpacity>
        <View style={styles.dashline} />
        <TouchableOpacity style={styles.btnnext} onPress={() => {}}>
          <Text style={styles.txtnext}>YOUR CASE</Text>
        </TouchableOpacity>
        <View style={styles.dashline} />
        <TouchableOpacity style={styles.btnnext} onPress={() => {
          navigation.navigate('U_Policy');
        }}>
          <Text style={styles.txtnext}>POLICY</Text>
        </TouchableOpacity>
        <View style={styles.dashline} />
        <TouchableOpacity style={styles.btnnext} onPress={() => {
          navigation.navigate('U_Online');
        }}>
          <Text style={styles.txtnext}>ONLINE SUPPORT</Text>
        </TouchableOpacity>
        <View style={styles.dashline} />
        <TouchableOpacity style={styles.btnnext} onPress={() => {}}>
          <Text style={styles.txtnext}>LOGOUT</Text>
        </TouchableOpacity>
        <View style={styles.dashline} />
      </ScrollView>

      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          navigation.navigate('U_Home');
        }}>
        <Text style={styles.txtsave}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contanin: {flex: 1, backgroundColor: 'white', alignItems: 'center'},
  mainview: {
    width: '100%',
  },
  btnsave: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#3074a4',

    width: '100%',
    alignSelf: 'center',
  },
  txtsave: {color: 'white', fontWeight: 'bold', fontSize: 24},
  btnnext: {
    padding: 10,
    margin: 5,
    backgroundColor: '#106e7c',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  txtnext: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  dashline: {
    height: 1,
    width: '100%',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
    zIndex: 0,
    margin: 5,
  },
  textWithShadow: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 7,
  },
});
export default U_Setting;
