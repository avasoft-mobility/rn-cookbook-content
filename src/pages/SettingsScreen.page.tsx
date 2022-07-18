import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface SettingsScreenProps {
  navigation: any;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  return (
    <View style={Styles.parentContainer}>
      <Text style={Styles.textContainer}>Settings</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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

export default SettingsScreen;
