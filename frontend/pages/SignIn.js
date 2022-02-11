import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LogInBox from '../components/LogInBox';
import SignUpPrompt from '../components/SignUpPrompt';

const SignIn = () => {
  return (
    <View style={{height: '100%', alignItems: 'center', borderWidth: 1}}>
      <View style={{flex: 8, justifyContent: 'center', borderWidth: 1}}>
        <LogInBox />
      </View>
      <View style={{flex: 2, justifyContent: 'flex-end', borderWidth: 1}}>
        <SignUpPrompt />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logInBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignUpPrompt: {},
});

export default SignIn;
