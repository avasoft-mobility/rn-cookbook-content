import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={Styles.parentContainer}>
      <Text style={Styles.textContainer}>Home</Text>
      <Button
        title="Go to Help Screen"
        onPress={() => navigation.push('Help')}
      />
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

export default HomeScreen;
