import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const M_todo = ({navigation, route, A_Press}) => {
  const [C_Data, setC_Data] = useState([]);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [M_id, setM_id] = useState();
  useEffect(() => {
    getTheme();
  }, []);

  const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('M_id');
      setM_id(value);
      CarData();
      console.log(value);
    } catch (error) {
      console.log('error', error);
    }
  };
  CarData = () => {
    setC_Data(null);
    fetch(
      'https://timeparser.000webhostapp.com/Database/C_Work_Ass.php?C_M_Id=' +
        M_id,
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
  const onRefresh = () => {
    //set isRefreshing to true
    setIsRefreshing(true);
    CarData();
    // and set isRefreshing to false at the end of your callApiMethod()
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          alignSelf: 'center',
          backgroundColor: 'grey',
          padding: 10,
          width: '100%',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        !! This Is Your Job !!
      </Text>
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
                A_Press(item);
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
  );
};

const styles = StyleSheet.create({
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
export default M_todo;
