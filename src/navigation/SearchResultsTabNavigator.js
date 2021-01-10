import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import SearchResults from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'List'} component={SearchResults} />
      <Tab.Screen name={'Map'} component={SearchResults} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
