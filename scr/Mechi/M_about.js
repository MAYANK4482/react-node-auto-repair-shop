import React, {useEffect, useState} from 'react';
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

import AsyncStorage from '@react-native-async-storage/async-storage';
const M_about = ({navigation, route}) => {
  const [M_id, setM_id] = useState();
  const [M_Data, setM_Data] = useState([]);

  useEffect(() => {
    getTheme();
  }, []);
  const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('M_id');
      setM_id(value);
      Login();
    } catch (error) {
      console.log('error', error);
    }
  };

  Login = () => {
    fetch(
      'https://timeparser.000webhostapp.com/Database/M_Get.php?M_id=' + M_id,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          otherHeader: 'foo',
        },
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.Status == 'True') {
          console.log(responseJson.response[0]);
          setM_Data(responseJson.response[0]);
        } else {
          toast.show('SOMETHING WRONG,TRY AGAIN', {
            type: 'warning',
            placement: 'top',
            duration: 3000,
            offset: 30,
            animationType: 'zoom-in',
          });
        }
      })
      .catch(error => {
        console.error(error);
        toast.show('SOMETHING WRONG,TRY AGAIN', {
          type: 'warning',
          placement: 'top',
          duration: 3000,
          offset: 30,
          animationType: 'zoom-in',
        });
      });
  };

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
        <Text style={styles.txttile}>About You</Text>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => {
            navigation.navigate('M_Edit');
          }}>
          <Text style={styles.txtedit}>Edit</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Image
          source={require('../../Image/Main_Logo.jpg')}
          style={{width: 100, height: 100, alignSelf: 'center'}}></Image>
        <Text style={styles.txtinfo}>Name: - {M_Data?.M_Name}</Text>
        <Text style={styles.txtinfo}>Phone Number: - {M_Data?.M_Phone}</Text>
        <Text style={styles.txtinfo}>Email ID: - {M_Data?.M_Email}</Text>
        <Text style={styles.txtinfo}>
          Total Number Of Work Done: - {M_Data?.M_Workdone}
        </Text>
        <Text style={styles.txtinfo}>Exper: - {M_Data?.M_Workdone} Year</Text>
        <Text style={styles.txtinfo}>Area Of Expertis: - </Text>
        <Text style={styles.txtinfo}>Total Erning: - $1024</Text>
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
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    borderRadius: 20,
    borderColor: 'blue',
  },
  txtedit: {
    color: 'red',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
export default M_about;
