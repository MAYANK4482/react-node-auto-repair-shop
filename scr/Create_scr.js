import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import ImageSelect from './ImageSelect';
import ImageResizer from 'react-native-image-resizer';
import Axios from 'axios';
const baseurl = 'https://timeparser.000webhostapp.com/Database/M_Create.php';
const Create_scr = ({navigation, route, props}) => {
  const [chec, setChec] = useState(false);
  const [Name, setName] = useState('');
  const [Email, SetEmail] = useState('');
  const [passwork, setPassword] = useState('');
  const [repasswork, setREPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [send, setSend] = useState('M_Create');
  const [ImageData, setImageData] = useState();
  createnew = async () => {
    const payload = new FormData();
    payload.append(chec ? 'M_Image' : 'U_Image', {
      uri: ImageData.uri,
      name: ImageData.fileName,
      type: 'image/JPEG',
    });
    var URLSEND = chec
      ? 'https://timeparser.000webhostapp.com/Database/M_Create.php?M_Email=' +
        Email +
        '&M_Name=' +
        Name +
        '&M_Password=' +
        passwork +
        '&M_Phone=' +
        Phone
      : 'https://timeparser.000webhostapp.com/Database/U_Create.php?U_Email=' +
        Email +
        '&U_Name=' +
        Name +
        '&U_Password=' +
        passwork +
        '&U_Phone=' +
        Phone;

    fetch(URLSEND, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data; ',
        otherHeader: 'foo',
      },
      body: payload
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.Status);
        console.log(responseJson);

        if (responseJson.Status == 'True') {
          console.log('True');
          toast.show('LOGIN SUCCESSFULLY', {
            type: 'success',
            placement: 'top',
            duration: 3000,
            offset: 30,
            animationType: 'zoom-in',
          });
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
        console.error('error');
        console.error(error);
      });
  };

  callbackFunction = childData => {
    setImageData(childData);
  };
  return (
    <View style={styles.mainview}>
      <ScrollView style={styles.innnerview}>
        <Text style={styles.txtlogin}>Create New Account</Text>
        <ImageSelect parentCallback={callbackFunction}></ImageSelect>
        <TextInput
          style={styles.inp}
          placeholder={'Enter The Full Name'}
          onChangeText={txt => {
            setName(txt);
          }}
          // value={txt}
        ></TextInput>
        <TextInput
          style={styles.inp}
          placeholder={'Enter The Mail ID'}
          onChangeText={txt => {
            SetEmail(txt);
          }}></TextInput>
        <TextInput
          style={styles.inp}
          onChangeText={txt => {
            setPassword(txt);
          }}
          placeholder={'Enter The Password'}></TextInput>

        <TextInput
          style={styles.inp}
          placeholder={'Enter The Re-Password'}
          onChangeText={txt => {
            setREPassword(txt);
          }}></TextInput>
        <TextInput
          style={styles.inp}
          placeholder={'Enter The Phone Number'}
          onChangeText={txt => {
            setPhone(txt);
          }}></TextInput>

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

          <Text style={{width: 250}}>
            If you are creating machine account then click here
          </Text>
        </View>

        <TouchableOpacity
          style={styles.btnlogin}
          onPress={() => {
            if (Name == '') {
              console.log('Name null');
              toast.show('PLEASE ENTER THE NAME', {
                type: 'danger',
                placement: 'top',
                duration: 3000,
                offset: 30,
                animationType: 'zoom-in',
              });
            } else if (Email == '') {
              console.log('Email null');
              toast.show('PLEASE ENTER THE EMAIL ID', {
                type: 'danger',
                placement: 'top',
                duration: 3000,
                offset: 30,
                animationType: 'zoom-in',
              });
            } else if (passwork == '') {
              console.log('Name null');
              toast.show('PLEASE ENTER THE PASSWORD', {
                type: 'danger',
                placement: 'top',
                duration: 3000,
                offset: 30,
                animationType: 'zoom-in',
              });
            } else if (repasswork == '') {
              console.log('Name null');
              toast.show('PLEASE ENTER THE RE-PASSWORD', {
                type: 'danger',
                placement: 'top',
                duration: 3000,
                offset: 30,
                animationType: 'zoom-in',
              });
            }
            else if (passwork !== repasswork) {
              console.log('Name null');
              toast.show('PASSWORD NOT SAME', {
                type: 'danger',
                placement: 'top',
                duration: 3000,
                offset: 30,
                animationType: 'zoom-in',
              });
            } else if (Phone == '') {
              console.log('Name null');
              toast.show('PLEASE ENTER THE PHONE', {
                type: 'danger',
                placement: 'top',
                duration: 3000,
                offset: 30,
                animationType: 'zoom-in',
              });
            } else
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
          }}>
          <Text style={styles.btn_txt}>Create New User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnback}
          onPress={() => {
            navigation.navigate('Login_scr');
          }}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
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
  btnback: {
    borderRadius: 10,
    margin: 10,
  },
  btn_txt: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  innnerview: {
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '80%',
    margin: 10,
    marginVertical: 50,
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
export default Create_scr;
