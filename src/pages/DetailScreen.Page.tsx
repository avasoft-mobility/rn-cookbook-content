import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface DetailScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const DetailScreen: React.FC<DetailScreenProps> = props => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.text}>Detail Screen</Text>
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
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

export default DetailScreen;
