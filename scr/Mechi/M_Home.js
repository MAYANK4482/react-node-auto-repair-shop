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
import M_Location from './M_Location';
import M_todo from './M_todo';
import M_Setting from './M_Setting';
import AsyncStorage from '@react-native-async-storage/async-storage';
const M_Home = ({navigation, route}) => {
  const [lopen, setLopen] = useState(false);
  const [topen, setTopen] = useState(false);
  const [sopen, setSopen] = useState(false);
  const [mopen, setMopen] = useState(true);
  const [M_id, setM_id] = useState();
  const [M_Name, setM_Name] = useState();
  const [C_Data, setC_Data] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  useEffect(() => {
    getTheme();
  }, []);

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
          setM_Name(responseJson.response[0].M_Name);
          try {
            AsyncStorage.setItem(
              'M_Data',
              JSON.stringify(responseJson.response[0]),
            );
            CarData();
          } catch (error) {
            console.log('error', error);
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

  CarData = () => {
    setC_Data(null);
    fetch('https://timeparser.000webhostapp.com/Database/C_Panding.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        otherHeader: 'foo',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.Status == 'True') {
          setC_Data(responseJson.response);
          console.log(C_Data);
          setIsRefreshing(false);
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
      const value = await AsyncStorage.getItem('M_id');
      setM_id(value);
      Login();
      console.log(value);
    } catch (error) {
      console.log('error', error);
    }
  };

  const removeData = async () => {
    try {
      const savedUser = await AsyncStorage.clear();
      navigation.navigate('Login_scr');
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = () => {
    //set isRefreshing to true
    setIsRefreshing(true);
    CarData();
    // and set isRefreshing to false at the end of your callApiMethod()
  };
  return (
    <View style={styles.mainview}>
      {mopen ? (
        <View style={{flex: 1}}>
          <View
            style={{
              margin: 10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderColor: 'black',
            }}>
            <Image
              source={require('../../Image/Main_Logo.jpg')}
              style={{width: 50, height: 50, alignSelf: 'center'}}></Image>
            <Text>{M_Name}</Text>
          </View>
          {/* <ScrollView style={{margin: 10}}> */}
          <FlatList
            onRefresh={onRefresh}
            refreshing={isRefreshing}
            key={C_Data}
            style={{width: '90%'}}
            data={C_Data}
            renderItem={({item, index}) => (
              <View style={{}}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    console.log('ho');
                    // U_Car_Problem
                    navigation.navigate('M_C_Data', {paramKey: item});
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={styles.title}>
                        Auto Problem:- {item.C_Problem}
                      </Text>
                      <Text
                        style={[
                          styles.title,
                          {fontWeight: '400', width: 145, height: 60},
                        ]}>
                        {item.C_Problem_Details}
                      </Text>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
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
                          height: 40,
                          width: 70,
                          borderRadius: 10,
                          padding: 5,
                          borderWidth: 1,
                          borderColor: 'green',
                        }}></Image>
                      <Text style={styles.title}>{item.C_Name}</Text>
                      <Text style={styles.title}>
                        Mailage:-{item.C_Millage}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={[
                      styles.title,
                      {alignSelf: 'center', marginTop: 10},
                    ]}>
                    {item.C_Date}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.C_Id}
          />
          {/* </ScrollView> */}
        </View>
      ) : lopen ? (
        <M_Location></M_Location>
      ) : topen ? (
        <M_todo
          A_Press={val => {
            navigation.navigate('M_C_Data', {paramKey: val});
          }}></M_todo>
      ) : sopen ? (
        <M_Setting
          A_press={() => {
            navigation.navigate('M_about');
          }}
          E_press={() => {
            navigation.navigate('E_Edit');
          }}
          C_press={() => {
            navigation.navigate('M_Password');
          }}
          L_press={() => {
            removeData();
          }}></M_Setting>
      ) : null}
      <View style={styles.buttomview}>
        <TouchableOpacity
          style={styles.btnimage}
          onPress={() => {
            setSopen(false);
            setTopen(false);
            setLopen(false);
            setMopen(true);
          }}>
          <Image
            source={require('../../Image/Home.png')}
            style={styles.logo}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnimage}
          onPress={() => {
            setSopen(false);
            setTopen(false);
            setLopen(true);
            setMopen(false);
          }}>
          <Image
            source={require('../../Image/location.png')}
            style={styles.logo}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnimage}
          onPress={() => {
            setSopen(false);
            setTopen(true);
            setLopen(false);
            setMopen(false);
          }}>
          <Image
            source={require('../../Image/todo.png')}
            style={styles.logo}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnimage}
          onPress={() => {
            setSopen(true);
            setTopen(false);
            setLopen(false);
            setMopen(false);
          }}>
          <Image
            source={require('../../Image/setting.png')}
            style={styles.logo}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 60,
  },
  btnimage: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 5,
    borderColor: 'red',
  },
  buttomview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 5,
    backgroundColor: '#228cdc',
    padding: 10,
    borderRadius: 20,
    borderColor: '#106e7c',
    borderWidth: 2,
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'skyblue',
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 12,
    color: 'black',
  },
});

export default M_Home;
