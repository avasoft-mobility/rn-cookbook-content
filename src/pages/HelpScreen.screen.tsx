import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HelpScreen: React.FC = () => {
  return (
    <View style={Styles.parentContainer}>
      <Text style={Styles.textContainer}>Help Screen</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    color: '#000000',
    alignSelf: 'center',
  },
});

export default HelpScreen;
