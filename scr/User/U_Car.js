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
  ScrollView,
} from 'react-native';

const U_Car = ({navigation, route}) => {
  const [cname, setCname] = useState('');
  const [cmake, setCmake] = useState('');
  const [cmodel, setCmodel] = useState('');
  const [cyear, setCyear] = useState('');

  const [cmil, setCmil] = useState('');

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
          Enter The Car Data
        </Text>
        <Text style={{margin: 5, padding: 6, fontSize: 16}}>
          Here Application Ask Some Question regading car like :- Name,Make,
          modal , year, car iamge , car problem and some more
        </Text>
        <ScrollView>
          <View style={{padding: 9}}>
            <Text style={styles.txt}>Car Name</Text>
            <TextInput
              onChangeText={txt => {
                setCname(txt);
              }}
              placeholder="Enter The Car Name"
              style={[
                styles.txtinput,
                {borderColor: cname == '' ? null : 'green'},
              ]}></TextInput>
            <Text style={styles.txt}>Car Make</Text>
            <TextInput
              onChangeText={txt => {
                setCmake(txt);
              }}
              placeholder="Enter The Car Make"
              style={[
                styles.txtinput,
                {borderColor: cmake == '' ? null : 'green'},
              ]}></TextInput>
            <Text style={styles.txt}>Car Model</Text>
            <TextInput
              onChangeText={txt => {
                setCmodel(txt);
              }}
              placeholder="Enter The Car Model"
              style={[
                styles.txtinput,
                {borderColor: cmodel == '' ? null : 'green'},
              ]}></TextInput>
            <Text style={styles.txt}>Car Year</Text>
            <TextInput
              onChangeText={txt => {
                setCyear(txt);
              }}
              placeholder="Enter The Car Year"
              style={[
                styles.txtinput,
                {borderColor: cyear == '' ? null : 'green'},
              ]}></TextInput>
            <Text style={styles.txt}>Car Mailage</Text>
            <TextInput
              onChangeText={txt => {
                setCmil(txt);
              }}
              placeholder="Enter The Car Mailage"
              style={[
                styles.txtinput,
                {borderColor: cmil == '' ? null : 'green'},
              ]}></TextInput>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          if (cname == '') {
            console.log('Name null');
            toast.show('PLEASE ENTER THE CAR NAME', {
              type: 'danger',
              placement: 'top',
              duration: 3000,
              offset: 30,
              animationType: 'zoom-in',
            });
          } else if (cmake == '') {
            console.log('Name null');
            toast.show('PLEASE ENTER THE CAR MAKE', {
              type: 'danger',
              placement: 'top',
              duration: 3000,
              offset: 30,
              animationType: 'zoom-in',
            });
          } else if (cmodel == '') {
            console.log('Name null');
            toast.show('PLEASE ENTER THE CAR MODEL', {
              type: 'danger',
              placement: 'top',
              duration: 3000,
              offset: 30,
              animationType: 'zoom-in',
            });
          } else if (cyear == '') {
            console.log('Name null');
            toast.show('PLEASE ENTER YEAR OF THE CAR ', {
              type: 'danger',
              placement: 'top',
              duration: 3000,
              offset: 30,
              animationType: 'zoom-in',
            });
          } else if (cmil == '') {
            console.log('Name null');
            toast.show('PLEASE ENTER THE TOTAL MILAGE', {
              type: 'danger',
              placement: 'top',
              duration: 3000,
              offset: 30,
              animationType: 'zoom-in',
            });
          } else {
            var dataA = {
              Name: cname,
              Make: cmake,
              model: cmodel,
              year: cyear,
              mila: cmil,
            };
            navigation.navigate('U_Car_2', {passkey: dataA});
          }
         
        }}>
        <Text style={styles.txtsave}>Save & Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
        
          navigation.navigate('U_Home');
          // console.log(dataA)
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
export default U_Car;
