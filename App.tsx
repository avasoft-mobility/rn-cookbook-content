import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={Styles.fontContainer}>
      <Text style={{fontFamily: 'Montserrat-SemiBoldItalic'}}>
        customFont - Montserrat-SemiBoldItalic
      </Text>
      <Text style={{fontFamily: 'EduQLDBeginner-Bold'}}>
        customFont -EduQLDBeginner-Bold
      </Text>
      <Text style={{fontFamily: 'CormorantSC-Bold'}}>
        customFont -CormorantSC-Bold
      </Text>
      <Text style={{fontFamily: 'Lobster-Regular'}}>
        customFont -Lobster-Regular A
      </Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  fontContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
