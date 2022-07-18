import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HelpScreen from './src/pages/HelpScreen.screen';
import HomeWithTabs from './src/pages/HomeWithTabs.screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeWithTabs"
          component={HomeWithTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Help" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
