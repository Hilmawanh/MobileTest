import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Drawermain from './src/drawermain';
import Login from './src/login';
import Register from './src/register';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator initialRouteName="Login">
          <AppStack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <AppStack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <AppStack.Screen
            name="Drawermain"
            component={Drawermain}
            options={{headerShown: false}}
          />
        </AppStack.Navigator>
        {/* <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Details" component={Details} options={{headerShown:false}} />
          <Stack.Screen name="Home" component={Hometab} options={{headerShown:false}} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </>
  );
};

export default App;
