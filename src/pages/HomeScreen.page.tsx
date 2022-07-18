import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Submit"
        onPress={() =>
          props.navigation.navigate('DetailScreen', {name: 'Alexa', age: 24})
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    alignSelf: 'center',
  },
});

export default HomeScreen;
