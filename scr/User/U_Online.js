import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
  TextInput,
} from 'react-native';

const U_Online = ({navigation, route}) => {
  const [isfouc, setIsfouc] = useState(false);
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          navigation.navigate('U_Setting');
        }}>
        <Text style={styles.txtsave}>Back</Text>
      </TouchableOpacity>
      <View style={{flex: 1, padding: 20}}>
        <TextInput
          style={{borderWidth: 1, color: 'black', fontSize: 18}}
          placeholder={'Enter Your Mail ID'}></TextInput>
        <TextInput
          onFocus={() => {
            setIsfouc(true);
          }}
          onBlur={() => {
            setIsfouc(false);
          }}
          numberOfLines={5}
          style={{
            borderBottomWidth: 1,
            borderColor: isfouc ? 'darkgreen' : 'grey',
            fontSize: 18,
            marginTop: 20,
          }}
          placeholder={'Comment.....'}></TextInput>
        <TouchableOpacity
          style={styles.btnsave1}
          onPress={() => {
            navigation.navigate('U_Home');
          }}>
          <Text style={styles.txtsave1}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnsave: {
    width: '17%',
    padding: 5,
    backgroundColor: '#3074a4',
    alignItems: 'center',
  },
  txtsave: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  btnsave1: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#3074a4',

    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
  },
  txtsave1: {color: 'white', fontWeight: 'bold', fontSize: 24},
});
export default U_Online;
