import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
} from 'react-native';

const U_M_D = ({navigation, route}) => {
  const [C_M_id, setC_M_id] = useState();

  const [M_Data, setM_Data] = useState();
  useEffect(() => {
    console.log('data');
    console.log(route.params?.paramKey);
    // setC_M_id(route.params?.paramKey);
    Login(route.params?.paramKey);
  }, []);
  Login = id => {
    fetch(
      'https://timeparser.000webhostapp.com/Database/M_Get.php?M_id=' + id,
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
          console.log(responseJson);
          try {
            console.log(responseJson.response[0]);
            setM_Data(responseJson.response[0]);
          } catch (error) {
            console.log(error);
          }
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
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'black',
            fontSize: 18,
            margin: 10,
            fontWeight: 'bold',
          }}>
          Mechinal Information
        </Text>

        <View style={{padding: 5}}>
          <Image
            // source={}
            resizeMode="contain"
            source={
              M_Data?.M_Image != null
                ? {
                    uri:
                      'https://timeparser.000webhostapp.com/Database/Image/' +
                      M_Data?.M_Image,
                  }
                : require('../../Image/Main_Logo.jpg')
            }
            style={{
              height: 200,
              width: '70%',
              borderRadius: 10,
              padding: 5,
              borderWidth: 1,
              borderColor: 'green',
              alignSelf: 'center',
              marginVertical: 10,
            }}></Image>
          <Text style={styles.txt}>Name: - {M_Data?.M_Name}</Text>
          <Text style={styles.txt}>Email ID: - {M_Data?.M_Email}</Text>
          <Text style={styles.txt}>Phone Number: - {M_Data?.M_Phone}</Text>
          <Text style={styles.txt}>Work Done: - {M_Data?.M_Workdone}</Text>
        </View>
      </View>
      <Text >If you Not like this mechinic then go to online support</Text>
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          navigation.goBack();
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
  },
  txtsave: {color: 'white', fontWeight: 'bold', fontSize: 24},
  txt: {color: 'black', fontSize: 18, fontWeight: '700'},
});
export default U_M_D;

// toast.show("Task finished successfully", {
//   type: "normal | success | warning | danger | custom",
//   placement: "top | bottom",
//   duration: 4000,
//   offset: 30,
//   animationType: "slide-in | zoom-in",
// });
