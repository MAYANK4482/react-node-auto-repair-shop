import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash_scr from './Splash_scr';
import Login_scr from './Login_scr';
import Create_scr from './Create_scr';
import M_Home from './Mechi/M_Home';
import M_Location from './Mechi/M_Location';
import M_todo from './Mechi/M_todo';
import U_Home from './User/U_Home';
import M_Setting from './Mechi/M_Setting';
import MapViewscr from './MapViewscr';
import M_about from './Mechi/M_about';
import M_Edit from './Mechi/M_Edit';
import M_Password from './Mechi/M_Password';
import U_Location from './User/U_Location';
import U_Car from './User/U_Car';
import U_Setting from './User/U_Setting';
import U_Profile from './User/U_Profile';
import U_Edit from './User/U_Edit';
import U_Policy from './User/U_Policy';
import U_Online from './User/U_Online';
import U_Car_2 from './User/U_Car_2';
import U_Car_3 from './User/U_Car_3';
import U_Car_All from './User/U_Car_All';
import U_Car_Problem from './User/U_Car_Problem';
import U_M_D from './User/U_M_D';
import M_C_Data from './Mechi/M_C_Data';
import M_UData from './Mechi/M_UData'
const Stack = createNativeStackNavigator();

const Navigaton_scr = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash_scr"
          component={Splash_scr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="M_C_Data"
          component={M_C_Data}
          options={{headerShown: false}}
        /><Stack.Screen
        name="M_UData"
        component={M_UData}
        options={{headerShown: false}}
      />
       
        <Stack.Screen
          name="U_M_D"
          component={U_M_D}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="U_Car_2"
          component={U_Car_2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="U_Car_Problem"
          component={U_Car_Problem}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="U_Car_3"
          component={U_Car_3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="U_Car_All"
          component={U_Car_All}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="M_Password"
          component={M_Password}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="U_Online"
          component={U_Online}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="U_Policy"
          component={U_Policy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="U_Profile"
          component={U_Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="U_Edit"
          component={U_Edit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="U_Setting"
          component={U_Setting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="U_Car"
          component={U_Car}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="U_Location"
          component={U_Location}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="U_Home"
          component={U_Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login_scr"
          component={Login_scr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="M_Home"
          component={M_Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="M_Edit"
          component={M_Edit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="M_about"
          component={M_about}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'M_Location'}
          component={M_Location}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={'M_todo'}
          component={M_todo}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={'M_Setting'}
          component={M_Setting}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="MapViewscr"
          component={MapViewscr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create_scr"
          component={Create_scr}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigaton_scr;
