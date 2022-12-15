import React, {useState, useEffect} from 'react';
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
import ImageSelect from '../ImageSelect';

import AsyncStorage from '@react-native-async-storage/async-storage';
const U_Car_3 = ({navigation, route}) => {
  const [ImageData, setImageData] = useState();
  const [C_PassData, setC_PassData] = useState();
  const [U_id, setU_id] = useState();
  useEffect(() => {
    console.log('data');
    console.log(route.params?.passkey);
    setC_PassData(route.params?.passkey);
    getTheme();
  });
  const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('U_id');
      setU_id(value);
    } catch (error) {
      console.log('error', error);
    }
  };
  callbackFunction = childData => {
    setImageData(childData);
    console.log(childData.fileName);
  };
  createnew = async () => {
    const payload = new FormData();
    payload.append('C_Image', {
      uri: ImageData.uri,
      name: ImageData.fileName,
      type: 'image/JPEG',
    });
    // {"Make": "m", "Name": "m", "c_details": "mmm", "c_problem": "mm", "mila": "mm", "model": "m", "year": "Em"}
    var URLSEND =
      'https://timeparser.000webhostapp.com/Database/C_Create.php?C_Name=' +
      C_PassData.Name +
      '&C_U_Id=' +
      U_id +
      '&C_Problem=' +
      C_PassData.c_problem +
      '&C_WorkStatus=0' +
      '&C_Lang=0' +
      '&C_Latu=0' +
      '&C_Ass=0' +
      '&C_Millage=' +
      C_PassData.mila +
      '&C_Problem_Details=' +
      C_PassData.c_details +
      '&C_Model=' +
      C_PassData.model +
      '&C_Year=' +
      C_PassData.year;

    fetch(URLSEND, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data; ',
        otherHeader: 'foo',
      },
      body: payload,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.Status);
        console.log(responseJson);

        if (responseJson.Status == 'True') {
          console.log('True');
          toast.show('UPLOAD SUCCESSFULLY', {
            type: 'success',
            placement: 'top',
            duration: 3000,
            offset: 30,
            animationType: 'zoom-in',
          });
          navigation.navigate('U_Home');
        } else {
          console.log('Fal');
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
        console.error('error');
        console.error(error);
      });
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'black',
            fontSize: 18,
            margin: 10,
            fontWeight: 'bold',
            // height,
          }}>
          Enter The Car Image
        </Text>
        <ImageSelect
          parentCallback={callbackFunction}
          style={{height: '95%', width: '95%'}}></ImageSelect>
        <Text style={{margin: 5, padding: 6, fontSize: 16}}>
          {ImageData?.fileName == null ? '' : 'Name:- ' + ImageData.fileName}
        </Text>
        <Text style={{margin: 5, padding: 6, fontSize: 16}}>
          Click on Image for Select The Image of car
        </Text>
        <Text style={{margin: 5, padding: 6, fontSize: 16}}>
          Please, select proper image so Mechinic understand the problem
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          if (ImageData == null) {
            console.log('Name null');
            toast.show('PLEASE SELECT THE IMAGE', {
              type: 'danger',
              placement: 'top',
              duration: 3000,
              offset: 30,
              animationType: 'zoom-in',
            });
          } else {
            createnew();
          }

          // navigation.navigate('U_Home');
        }}>
        <Text style={styles.txtsave}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          navigation.navigate('U_Car_2');
        }}>
        <Text style={styles.txtsave}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnsave: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#3074a4',

    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
  },
  txtsave: {color: 'white', fontWeight: 'bold', fontSize: 24},
  txtinput: {
    borderWidth: 1,
    padding: 5,
    margin: 10,
    fontSize: 20,
    borderRadius: 10,
    color: 'black',
  },
  txt: {color: 'black', fontSize: 16},
});
export default U_Car_3;
