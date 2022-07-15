import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <View style={Styles.parentContainer}>
      <Text style={Styles.textContainer}>HomeScreen</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  textContainer: {
    color: '#000000',
    alignSelf: 'center',
  },
});

export default HomeScreen;
