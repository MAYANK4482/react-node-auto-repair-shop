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

const U_Car_2 = ({navigation, route}) => {
  const [cproblem, setCProblem] = useState('');
  const [cdetails, setCDetails] = useState('');
  const [C_PassData, setC_PassData] = useState();
  useEffect(() => {
    console.log('data');
    console.log(route.params?.passkey);
    setC_PassData(route.params?.passkey);
  });
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
          Enter The Car Problem
        </Text>
        {/* <Text style={{margin: 5, padding: 6, fontSize: 16}}>
          Here Application Ask Some Question regading car like :- Name,Make,
          modal , year, car iamge , car problem and some more
        </Text> */}
        <View style={{padding: 9}}>
          <Text style={styles.txt}>Car Problem</Text>
          <TextInput
            onChangeText={txt => {
              setCProblem(txt);
            }}
            placeholder="Enter The Car Problem"
            style={[
              styles.txtinput,
              {borderColor: cproblem == '' ? null : 'green'},
            ]}></TextInput>

          <Text style={styles.txt}>Car Problem Deatails</Text>
          <TextInput
            multiline
            onChangeText={txt => {
              setCDetails(txt);
            }}
            placeholder="Enter The Car Problem Deatails"
            style={[
              styles.txtinput,
              {borderColor: cdetails == '' ? null : 'green', height: 150},
            ]}></TextInput>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          if (cproblem == '') {
            console.log('Name null');
            toast.show('PLEASE ENTER MAIN PROBLEM OF THE CAAR', {
              type: 'danger',
              placement: 'top',
              duration: 3000,
              offset: 30,
              animationType: 'zoom-in',
            });
          } else if (cdetails == '') {
            console.log('Name null');
            toast.show('PLEASE EXPLAIN ABOUT YOUR CAR PROBLEM', {
              type: 'danger',
              placement: 'top',
              duration: 3000,
              offset: 30,
              animationType: 'zoom-in',
            });
          } else {
            var dataA = {
              Name: C_PassData.Name,
              Make: C_PassData.Make,
              model: C_PassData.model,
              year: C_PassData.year,
              mila: C_PassData.mila,
              c_problem: cproblem,
              c_details: cdetails,
            };

            // setC_PassData(dataA);
            console.log(dataA);
            navigation.navigate('U_Car_3', {passkey: dataA});
          }
        }}>
        <Text style={styles.txtsave}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          navigation.navigate('U_Car');
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
export default U_Car_2;
