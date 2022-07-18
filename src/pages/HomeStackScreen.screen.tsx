import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HelpScreen from './HelpScreen.page';
import HomeScreen from './HomeScreen.screen';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={'Home'} component={HomeScreen} />
      <HomeStack.Screen name={'Help'} component={HelpScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
