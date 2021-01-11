import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DestinationSearch from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guests';
import PostDetailsScreen from '../screens/PostDetails';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearch}
          options={{ title: 'Search your Destination' }}
        />

        <Stack.Screen
          name={'Guests'}
          component={GuestScreen}
          options={{ title: 'Enter Guest details' }}
        />

        <Stack.Screen
          name={'PostDetails'}
          component={PostDetailsScreen}
          options={{ title: 'Accommodation' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
