import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';

import SeachPage from '../screens/SearchPage';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SearchPage'>
        <Stack.Screen
          name='SearchPage'
          component={SeachPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;