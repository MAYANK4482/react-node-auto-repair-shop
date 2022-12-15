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
  TextInput,
} from 'react-native';
import ImageSelect from '../ImageSelect';

const M_Edit = ({navigation, route}) => {
  return (
    <View style={styles.mainview}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => {
            navigation.navigate('M_Home');
          }}>
          <Text style={[styles.txtedit, {color: 'blue'}]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.txttile, {flex: 0.9}]}>Edit Your Profile</Text>
      </View>
      <ScrollView>
        <ImageSelect
          defultimage={require('../../Image/Home.png')}></ImageSelect>
        <TextInput style={styles.txtinfo} placeholder={'Name'}></TextInput>
        <TextInput
          style={styles.txtinfo}
          placeholder="Phone Number"></TextInput>
        <TextInput style={styles.txtinfo} placeholder="Email ID"></TextInput>
        <TextInput style={styles.txtinfo} placeholder="exper"></TextInput>
        <TextInput
          style={styles.txtinfo}
          placeholder="Areat of experti"></TextInput>
      </ScrollView>
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          navigation.navigate('M_Home');
        }}>
        <Text style={styles.txtsave}>SAVE</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
  },
  txtinfo: {
    color: 'black',
    fontSize: 18,
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    borderRadius: 20,
    borderColor: 'blue',
    paddingHorizontal: 20,
  },
  txtedit: {
    color: 'red',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  btnsave: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3074a4',
    borderRadius: 20,
    width: '60%',
    alignSelf: 'center',
  },
  txtsave: {color: 'white', fontWeight: 'bold', fontSize: 24},
});
export default M_Edit;
