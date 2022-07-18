import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/pages/HomeScreen.page';
import SettingsScreen from './src/pages/SettingsScreen.page';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            if (route.name === 'Home' && focused) {
              return (
                <Image
                  style={{width: 40, height: 30}}
                  source={require('./src/images/HomeIconFilled.png')}
                />
              );
            }

            if (route.name === 'Home' && !focused) {
              return (
                <Image
                  style={{width: 40, height: 30}}
                  source={require('./src/images/HomeIconOutlined.png')}
                />
              );
            }

            if (route.name === 'Settings' && focused) {
              return (
                <Image
                  style={{width: 40, height: 30}}
                  source={require('./src/images/SettingsIconFilled.png')}
                />
              );
            }

            if (route.name === 'Settings' && !focused) {
              return (
                <Image
                  style={{width: 40, height: 30}}
                  source={require('./src/images/SettingsIconOutlined.png')}
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
    </NavigationContainer>
  );
};

export default App;
