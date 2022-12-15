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
  TextInput,
} from 'react-native';

const M_C_Data = ({navigation, route}) => {
  const [C_PassData, setC_PassData] = useState();
  useEffect(() => {
    console.log('data');
    console.log(route.params?.paramKey);
    setC_PassData(route.params?.paramKey);
  });
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'black',
            fontSize: 18,
            margin: 10,
            fontWeight: 'bold',
          }}>
          Car Problem
        </Text>
        <View style={{padding: 5}}>
          <Image
            // source={}
            resizeMode="contain"
            source={
              C_PassData?.C_Image != null
                ? {
                    uri:
                      'https://timeparser.000webhostapp.com/Database/Image/' +
                      C_PassData?.C_Image,
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
          <Text style={styles.txt}>Uploaded Date: - {C_PassData?.C_Date}</Text>
          <Text style={styles.txt}>Name: - {C_PassData?.C_Name}</Text>

          <Text style={styles.txt}>Model: - {C_PassData?.C_Model}</Text>
          <Text style={styles.txt}>Milage: - {C_PassData?.C_Millage}</Text>
          <Text style={styles.txt}>Year: - {C_PassData?.C_Year}</Text>
          <Text style={styles.txt}>Problem: - {C_PassData?.C_Problem}</Text>
          <Text style={styles.txt}>
            Problem Details: - {C_PassData?.C_Problem_Details}
          </Text>

          <TouchableOpacity
            onPress={() => {
              console.log('aa');
              navigation.navigate('M_UData', {paramKey: C_PassData?.C_U_Id});
            }}>
            <Text style={[styles.txt, {alignSelf: 'center', color: 'green'}]}>
              Coustomer Details
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',

          alignItems: 'center',
        }}>
        <TextInput
        keyboardType='number-pad'
          placeholder="Plase enter the qut for car repair"
          style={{
            borderWidth: 1,
            borderColor: 'green',
            fontSize: 18,
            padding: 5,
            flex: 1,
            margin: 5,
          }}></TextInput>
        <TouchableOpacity
          style={{borderRadius: 10, borderWidth: 1, padding: 10}}
          onPress={() => {
            console.log('aa');
          }}>
          <Text
            style={{
              color: 'green',
            }}>
            SEND
          </Text>
        </TouchableOpacity>
      </View>
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
export default M_C_Data;

// toast.show("Task finished successfully", {
//   type: "normal | success | warning | danger | custom",
//   placement: "top | bottom",
//   duration: 4000,
//   offset: 30,
//   animationType: "slide-in | zoom-in",
// });
