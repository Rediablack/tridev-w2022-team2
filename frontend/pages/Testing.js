import React from 'react';
import {Button, View, Text} from 'react-native';

const Testing = ({navigation}) => {
  return (
    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        title="Go to MatchedList"
        onPress={() => navigation.navigate('MatchedList')}
      />
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Go to EditClasses"
        onPress={() => navigation.navigate('EditClasses')}
      />
      <Button
        title="Go to ProfileSetup"
        onPress={() => navigation.navigate('ProfileSetup')}
      />
    </View>
  );
};

export default Testing;
