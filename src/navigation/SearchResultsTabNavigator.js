import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = () => {
  const route = useRoute();
  const { guests } = route.params;
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'List'}>
        {() => <SearchResults guests={guests} />}
      </Tab.Screen>
      <Tab.Screen name={'Map'}>
        {() => <SearchResultsMap guests={guests} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
