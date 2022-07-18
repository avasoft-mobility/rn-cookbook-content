import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/pages/HomeScreen.page';
import SettingsScreen from './src/pages/SettingsScreen.page';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
