import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Images = ({img}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: `${img.largeImageURL}`}} />
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    aspectRatio: 1,
    resizeMode: 'stretch',
    marginBottom: 2,
  },
});
