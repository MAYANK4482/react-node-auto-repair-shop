import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login_scr = ({navigation, route}) => {
  const [chec, setChec] = useState(false);
  const [Email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log('responseJson');
  });
  const setTheme = async theme => {
    try {
      await AsyncStorage.setItem(chec ? 'M_id' : 'U_id', theme);
    } catch (error) {
      console.log('error', error);
    }
  };

  Login = () => {
    var URLSEND = chec
      ? 'https://timeparser.000webhostapp.com/Database/M_Login.php?M_Email=' +
        Email +
        '&M_Password=' +
        password
      : 'https://timeparser.000webhostapp.com/Database/U_Login.php?U_Email=' +
        Email +
        '&U_Password=' +
        password;
    fetch(URLSEND, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        otherHeader: 'foo',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        // console.log(responseJson.response[0]);
        if (responseJson.Status == 'True') {
          console.log('True');
          toast.show('LOGIN SUCCESSFULLY', {
            type: 'success',
            placement: 'top',
            duration: 3000,
            offset: 30,
            animationType: 'zoom-in',
          });
          chec
            ? setTheme(responseJson.response[0].M_id)
            : setTheme(responseJson.response[0].U_id);
          chec ? navigation.navigate('M_Home') : navigation.navigate('U_Home');
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
        console.error(error);
      });
  };

  return (
    <View style={styles.mainview}>
      <View style={styles.innnerview}>
        <Text style={styles.txtlogin}>Login</Text>

        <TextInput
          onChangeText={txt => {
            SetEmail(txt);
          }}
          style={styles.inp}
          placeholder={'Enter The Mail ID'}></TextInput>
        <TextInput
          onChangeText={txt => {
            setPassword(txt);
          }}
          style={styles.inp}
          placeholder={'Enter The Password'}></TextInput>

        <View
          style={{alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity
            onPress={() => {
              setChec(!chec);
            }}>
            <Image
              style={{height: 25, width: 25, marginHorizontal: 5}}
              source={
                chec
                  ? require('../Image/check.png')
                  : require('../Image/uncheck.png')
              }
            />
          </TouchableOpacity>

          <Text>If you are machine then click here</Text>
        </View>

        <View style={styles.loginview}>
          <TouchableOpacity
            style={styles.btnlogin}
            onPress={() => {
              if (Email == '') {
                console.log('Email null');
                toast.show('PLEASE ENTER THE EMAIL ID', {
                  type: 'danger',
                  placement: 'top',
                  duration: 3000,
                  offset: 30,
                  animationType: 'zoom-in',
                });
              } else if (password == '') {
                console.log('Email null');
                toast.show('PLEASE ENTER THE PASSWORD', {
                  type: 'danger',
                  placement: 'top',
                  duration: 3000,
                  offset: 30,
                  animationType: 'zoom-in',
                });
              } else {
                console.log('Done');
                Login();
              }

              //
            }}>
            <Text style={styles.btn_txt}>Login</Text>
          </TouchableOpacity>
          <Text>---or---</Text>
          <TouchableOpacity
            style={styles.btnlogin}
            onPress={() => {
              navigation.navigate('Create_scr');
            }}>
            <Text style={styles.btn_txt}>Create New User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#228cdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnlogin: {
    backgroundColor: '#3074a4',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  btn_txt: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  innnerview: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  txtlogin: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  loginview: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  inp: {
    width: '90%',
    borderRadius: 20,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
export default Login_scr;
