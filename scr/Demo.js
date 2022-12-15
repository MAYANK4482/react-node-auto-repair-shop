import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
} from 'react-native';

const Demo = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <Text>Mayank</Text>

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
});
export default Demo;


// toast.show("Task finished successfully", {
//   type: "normal | success | warning | danger | custom",
//   placement: "top | bottom",
//   duration: 4000,
//   offset: 30,
//   animationType: "slide-in | zoom-in",
// });