import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Detail Screen</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
  },
});

export default DetailScreen;
