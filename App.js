import React from 'react';
import {View, Text} from 'react-native';
import Navigaton_scr from './scr/Navigaton_scr';
import Toast from "react-native-toast-notifications";

const App = () => {
  return (
    <View style={{flex:1}}>
      <Navigaton_scr></Navigaton_scr>
      <Toast ref={ref => (global['toast'] = ref)} />
    </View>
  );
};

export default App;
// toast.show("Task finished successfully", {
//   type: "normal | success | warning | danger | custom",
//   placement: "top | bottom",
//   duration: 4000,
//   offset: 30,
//   animationType: "slide-in | zoom-in",
// });
