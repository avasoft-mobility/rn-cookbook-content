import React from 'react';
import {Pressable, Text, View} from 'react-native';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const onPressNavigate = () => {
    console.log('sad');
    props.navigation.navigate('screen2');
  };
  return (
    <View>
      <Text style={{color: '#000000'}}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
