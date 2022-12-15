import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const U_Car_All = ({navigation, route}) => {
  const [U_id, setU_id] = useState();
  const [U_Name, setU_Name] = useState();

  const [C_Data, setC_Data] = useState([]);

  useEffect(() => {
    getTheme();
  }, []);

  deletedata = () => {
    // console.log('dele');
  };
  CarData = () => {
    setC_Data(null);
    fetch(
      'https://timeparser.000webhostapp.com/Database/C_Work_Upload.php?C_U_Id=' +
        U_id,
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
          console.log(responseJson.response);
          setC_Data(responseJson.response);
          // console.log(C_Data);
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
  const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('U_id');
      setU_id(value);
      CarData()
    } catch (error) {
      console.log('error', error);
    }
  };

  

  return (
    <View style={styles.secondview}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.txtname, {flex: 1}]}>* All Car Information *</Text>
        <TouchableOpacity
          style={{margin: 5}}
          onPress={() => {
            navigation.navigate('U_Car');
          }}>
          <Text style={{backgroundColor: 'grey', padding: 5, borderRadius: 10}}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        key={C_Data}
        style={{width: '90%'}}
        data={C_Data}
        renderItem={({item, index}) => (
          <View style={{}}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                console.log('ho');
                Alert.alert(
                  item.C_Name + 'Informaion',
                  'Name:- ' +
                    item.C_Name +
                    '\n' +
                    'Model:- ' +
                    item.C_Model +
                    '\n' +
                    'Year:- ' +
                    item.C_Year +
                    '\n' +
                    'Milage:- ' +
                    item.C_Millage +
                    '\n' +
                    'Last Problem:- ' +
                    item.C_Problem +
                    '\n',
                  [
                    {
                      text: 'Close',
                      onPress: () => {},
                      style: 'cancel',
                    },
                  ],
                );
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={styles.title}>Name:- {item.C_Name}</Text>
                  <Text
                    style={[
                      styles.title,
                      {fontWeight: '400', width: 145, height: 60},
                    ]}>
                    Milage:- {item.C_Millage}
                  </Text>
                </View>

                <Image
                  // source={}
                  resizeMode="contain"
                  source={
                    item.C_Image != null
                      ? {
                          uri:
                            'https://timeparser.000webhostapp.com/Database/Image/' +
                            item.C_Image,
                        }
                      : require('../../Image/Main_Logo.jpg')
                  }
                  style={{
                    height: 60,
                    width: 100,
                    borderRadius: 10,
                    padding: 5,
                    borderWidth: 1,
                    borderColor: 'green',
                  }}></Image>
              </View>
              <Text style={[styles.title, {alignSelf: 'center'}]}>
                {item.C_Date}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    item.C_Name + 'Informaion, You Want to Delete',
                    'Name:- ' +
                      item.C_Name +
                      '\n' +
                      'Model:- ' +
                      item.C_Model +
                      '\n' +
                      'Year:- ' +
                      item.C_Year +
                      '\n' +
                      'Milage:- ' +
                      item.C_Millage +
                      '\n' +
                      'Last Problem:- ' +
                      item.C_Problem +
                      '\n',
                    [
                      {
                        text: 'Close',
                        onPress: () => {},
                        style: 'cancel',
                      },
                      {
                        text: 'Yes',
                        onPress: () => {
                          //   console.log('okok');
                          // deletedata();
                          let filteredArray = C_Data.filter(
                            item => item.C_Id != item.C_Id,
                          );
                          setC_Data(filteredArray);
                          // setC_Data(responseJson.response);
                          console.log(C_Data);
                        },
                        style: 'yes',
                      },
                    ],
                  );
                }}>
                <Text style={{color: 'red'}}>Delete</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.C_Id}
      />
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          navigation.navigate('U_Setting');
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
    flexDirection: 'row',
  },
  secondview: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  secondview2: {
    backgroundColor: '#228cdc',

    padding: 10,
    alignItems: 'center',
    height: '57%',
    marginTop: '20%',
    borderRadius: 20,
    marginRight: 10,
  },
  txtname: {color: 'black', fontSize: 20, fontWeight: 'bold'},
  logo: {width: 40, height: 40},
  btnimage: {
    borderRadius: 20,
    borderWidth: 1,

    borderColor: 'white',
    padding: 4,
    marginVertical: 10,
  },
  item: {
    backgroundColor: 'lightgrey',
    padding: 10,
    marginVertical: 5,

    borderRadius: 20,
    // width: '100%',
    borderWidth: 1,
    borderColor: 'red',
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  btnsave: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#3074a4',

    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  txtsave: {color: 'white', fontWeight: 'bold', fontSize: 24},
});
export default U_Car_All;
