import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen.screen';
import SettingsScreen from './SettingsScreen.screen';

const Tab = createBottomTabNavigator();

const HomeWithTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home' && focused) {
            return (
              <Image
                style={{width: 40, height: 30}}
                source={require('../images/HomeIconFilled.png')}
              />
            );
          }

          if (route.name === 'Home' && !focused) {
            return (
              <Image
                style={{width: 40, height: 30}}
                source={require('../images/HomeIconOutlined.png')}
              />
            );
          }

          if (route.name === 'Settings' && focused) {
            return (
              <Image
                style={{width: 40, height: 30}}
                source={require('../images/SettingsIconFilled.png')}
              />
            );
          }

          if (route.name === 'Settings' && !focused) {
            return (
              <Image
                style={{width: 40, height: 30}}
                source={require('../images/SettingsIconOutlined.png')}
              />
            );
          }
          return;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default HomeWithTabs;
