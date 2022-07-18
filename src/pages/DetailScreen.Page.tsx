import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface DetailScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  route: RouteProp<{params: {name: string; age: number}}, 'params'>;
}

const DetailScreen: React.FC<DetailScreenProps> = props => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.text}>Detail Screen</Text>
      <View style={styles.details}>
        <Text style={styles.text}>Name: {props.route.params.name}</Text>
        <Text style={styles.text}>Age: {props.route.params.age}</Text>
      </View>
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

export default DetailScreen;
