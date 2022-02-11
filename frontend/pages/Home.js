import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import PotentialMatch from '../components/PotentialMatch';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#33B6E4'}}>
      <View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.2)'}}>
        <Header />
        <View style={{flex: 8}}>
          <PotentialMatch />
        </View>
      </View>
    </View>
  );
};

export default Home;
