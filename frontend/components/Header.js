import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={[{flex: 4}, styles.divider]}>
        <Text style={{fontSize: 30}}>App Name</Text>
      </View>
      <View style={[{flex: 5, flexDirection: 'row'}, styles.divider]}>
        <View style={styles.logo}>
          <Text>Logo1</Text>
        </View>
        <View style={styles.logo}>
          <Text>Logo2</Text>
        </View>
        <View style={styles.logo}>
          <Text>Logo3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#00A4DE',
    flexDirection: 'row',
  },
  divider: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    flex: 1,
    height: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Header;
