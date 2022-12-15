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

const M_Setting = ({navigation, route, L_press, A_press, E_press, C_press}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.mainview}>
        <TouchableOpacity style={styles.btnnext} onPress={A_press}>
          <Text style={styles.txtnext}>ABOUT</Text>
        </TouchableOpacity>
        <View style={styles.dashline} />
        <TouchableOpacity style={styles.btnnext} onPress={E_press}>
          <Text style={styles.txtnext}>EDIT PROFILE</Text>
        </TouchableOpacity>
        <View style={styles.dashline} />
        <TouchableOpacity style={styles.btnnext} onPress={C_press}>
          <Text style={styles.txtnext}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
        <View style={styles.dashline} />
        <TouchableOpacity style={styles.btnnext} onPress={L_press}>
          <Text style={styles.txtnext}>LOGOUT</Text>
        </TouchableOpacity>
        {/* <View style={styles.dashline} /> */}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainview: {
    padding: 10,
    backgroundColor: 'white',
  },
  btnnext: {
    padding: 10,
    margin: 5,
    backgroundColor: '#106e7c',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
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
});
export default M_Setting;
