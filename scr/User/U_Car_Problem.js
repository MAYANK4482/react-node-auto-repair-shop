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

const U_Car_Problem = ({navigation, route}) => {
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
          {C_PassData?.C_WorkStatus == '0' ? (
            <Text style={[styles.txt, {alignSelf: 'center', color: 'red'}]}>
              Mechinal not Ass
            </Text>
          ) : (
            <TouchableOpacity
              onPress={() => {
                console.log('aa');
                navigation.navigate('U_M_D', {paramKey: C_PassData?.C_M_Id});
              }}>
              <Text style={[styles.txt, {alignSelf: 'center', color: 'green'}]}>
                Mechini Ass
              </Text>
            </TouchableOpacity>
          )}
        </View>
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
export default U_Car_Problem;
