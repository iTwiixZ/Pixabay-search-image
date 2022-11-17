import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <Text style={styles.title}>Pixabay</Text>
      <Text style={styles.paragrah}>The internet’s source for visuals.</Text>
      <Text style={styles.paragrah}>Powered by creators everywhere</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'PlayfairDisplay-Regular',
  },
  paragrah: {
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay-Medium',
    fontWeight: 'bold',
  },
});
