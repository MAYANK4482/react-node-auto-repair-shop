import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const U_Home = ({navigation, route}) => {
  const [Hopen, setHopen] = useState(true);
  const [lopen, setLopen] = useState(false);
  const [mopen, setMopen] = useState(false);

  const [sopen, setSopen] = useState(false);
  const [topen, setTopen] = useState(false);
  const [U_id, setU_id] = useState();
  const [U_Name, setU_Name] = useState();

  const [C_Data, setC_Data] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  useEffect(() => {
    getTheme();
  }, []);

  Login = () => {
    fetch(
      'https://timeparser.000webhostapp.com/Database/U_Get.php?U_id=' + U_id,
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
          setU_Name(responseJson.response[0].U_Name);
          try {
            AsyncStorage.setItem(
              'U_Data',
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
      const value = await AsyncStorage.getItem('U_id');
      setU_id(value);
      Login();
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
  change1 = changecount => {
    switch (changecount) {
      case 1:
        setHopen(true);
        setSopen(false);
        setTopen(false);
        setLopen(false);
        setMopen(false);
        break;
      case 2:
        setHopen(false);
        setSopen(false);
        setTopen(false);
        setLopen(true);
        setMopen(false);
        break;
      case 3:
        setHopen(false);
        setSopen(false);
        setTopen(false);
        setLopen(false);
        setMopen(true);
        break;
      case 4:
        setHopen(false);
        setSopen(true);
        setTopen(false);
        setLopen(false);
        setMopen(false);

        break;
      case 5:
        setHopen(false);
        setSopen(false);
        setTopen(true);
        setLopen(false);
        setMopen(false);
        break;

      default:
        setHopen(true);
        setSopen(false);
        setTopen(false);
        setLopen(false);
        setMopen(false);
        break;
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
      <View style={styles.secondview}>
        <Text style={styles.txtname}>* {U_Name == null ? '*' : U_Name} *</Text>

        <FlatList
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          key={C_Data}
          style={{width: '90%'}}
          data={C_Data}
          renderItem={({item, index}) => (
            <View style={{}}>
              <TouchableOpacity
                style={[
                  styles.item,
                  item.C_WorkStatus == '1'
                    ? {borderColor: 'darkgreen', borderWidth: 2}
                    : null,
                ]}
                onPress={() => {
                  console.log('ho');
                  // U_Car_Problem
                  navigation.navigate('U_Car_Problem', {paramKey: item});
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
                      em.C_Problem_Detailsem.C_Problem_DetailsC_Problem_Detailsem.C_Problem_DetailsC_Problem_Detailsem.C_Problem_DetailsC_Problem_Detailsem.C_Problem_Details
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
                    <Text style={styles.title}>Mailage:-{item.C_Millage}</Text>
                  </View>
                </View>
                <Text
                  style={[styles.title, {alignSelf: 'center', marginTop: 10}]}>
                  {item.C_Date}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.C_Id}
        />
      </View>
      <View style={styles.secondview2}>
        <TouchableOpacity
          style={[styles.btnimage, {backgroundColor: Hopen ? 'green' : null}]}
          onPress={() => {
            change1(1);
          }}>
          <Image
            source={require('../../Image/Home.png')}
            style={styles.logo}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnimage, {backgroundColor: lopen ? 'green' : null}]}
          onPress={() => {
            change1(2);
            navigation.navigate('U_Location');
          }}>
          <Image
            source={require('../../Image/location.png')}
            style={styles.logo}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnimage, {backgroundColor: mopen ? 'green' : null}]}
          onPress={() => {
            change1(3);
            navigation.navigate('U_Car');
          }}>
          <Image
            source={require('../../Image/car.png')}
            style={styles.logo}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnimage, {backgroundColor: sopen ? 'green' : null}]}
          onPress={() => {
            navigation.navigate('U_Setting');
            change1(4);
          }}>
          <Image
            source={require('../../Image/setting.png')}
            style={styles.logo}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnimage, {backgroundColor: topen ? 'green' : null}]}
          onPress={() => {
            change1(5);

            removeData();
          }}>
          <Image
            source={require('../../Image/logout.png')}
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
});
export default U_Home;
