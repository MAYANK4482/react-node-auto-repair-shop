import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';

const M_Password = ({navigation, route}) => {
  return (
    <View style={styles.mainview}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => {
            navigation.navigate('M_Home');
          }}>
          <Text style={[styles.txtedit, {color: 'blue'}]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.txttile, {flex: 0.9}]}>Change Your Password</Text>
      </View>
      <TextInput
        style={styles.txtinfo}
        placeholder="Enter The Old PassWord"></TextInput>
      <TextInput
        style={styles.txtinfo}
        placeholder="Enter The New PassWord"></TextInput>
      <TextInput
        style={styles.txtinfo}
        placeholder="Enter The New Re-PassWord"></TextInput>
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          navigation.navigate('M_Home');
        }}>
        <Text style={styles.txtsave}>Save Password</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  txtedit: {
    color: 'red',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  txtinfo: {
    color: 'black',
    fontSize: 18,
    borderWidth: 1,
    padding: 5,
    margin: 10,
    borderRadius: 20,
    borderColor: 'lightblue',
    paddingHorizontal: 20,
  },
  btnsave: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3074a4',
    borderRadius: 20,
    width: '60%',
    alignSelf: 'center',
    marginTop: 20,
  },
  txtsave: {color: 'white', fontWeight: 'bold', fontSize: 24},
});
export default M_Password;
