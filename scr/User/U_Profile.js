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

const U_Profile = ({navigation, route}) => {
  return (
    <View style={styles.mainview}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => {
            navigation.navigate('U_Setting');
          }}>
          <Text style={[styles.txtedit, {color: 'blue'}]}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.txttile}>About You</Text>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => {
            navigation.navigate('U_Edit');
          }}>
          <Text style={styles.txtedit}>Edit</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Image
          source={require('../../Image/Main_Logo.jpg')}
          style={{width: 100, height: 100, alignSelf: 'center'}}></Image>
        <View style={styles.dashline} />
        <Text style={styles.txtinfo}>Name: - Nayank</Text>
        <View style={styles.dashline} />
        <Text style={styles.txtinfo}>Phone Number: - +1 216-216-2121</Text>
        <View style={styles.dashline} />
        <Text style={styles.txtinfo}>Email ID: - newapp@gmail.com</Text>
        <View style={styles.dashline} />
        <Text style={styles.txtinfo}>Total Number Of Work Done: - 1</Text>
        <View style={styles.dashline} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  txttile: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },
  txtinfo: {
    color: 'black',
    fontSize: 18,

    padding: 5,
    marginTop: 10,
    borderRadius: 20,
  },
  txtedit: {
    color: 'red',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
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
export default U_Profile;
