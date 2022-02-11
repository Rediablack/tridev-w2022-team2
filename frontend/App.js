/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import MatchedList from './pages/Home';
import SignUp from './pages/SignUp';
import EditClasses from './pages/EditClasses';
import ProfileSetUp from './pages/ProfileSetUp';

import Testing from './pages/Testing';

import {AppProvider} from './context';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Testing"
            component={Testing}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MatchedList"
            component={MatchedList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditClasses"
            component={EditClasses}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileSetUp"
            component={ProfileSetUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
