import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  route: RouteProp<{params: {name: string; age: number}}, 'params'>;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.text}>Home Screen</Text>
      {props.route.params !== undefined ? (
        <View style={styles.details}>
          <Text style={styles.text}>Name: {props.route.params.name}</Text>
          <Text style={styles.text}>Age: {props.route.params.age}</Text>
        </View>
      ) : null}
      <Button
        title="Submit"
        onPress={() =>
          props.navigation.navigate('DetailScreen', {
            name: 'John Carter',
            age: 26,
          })
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
  details: {
    marginTop: 20,
  },
});

export default HomeScreen;
