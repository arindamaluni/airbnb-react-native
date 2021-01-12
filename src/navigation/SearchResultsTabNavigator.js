import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { listPosts } from '../graphql/queries';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = () => {
  const route = useRoute();
  const { guests, viewport } = route.params;
  const [posts, setPosts] = useState([]);
  console.log(viewport);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              maxGuests: { ge: guests },
              latitude: {
                between: [viewport.southwest.lat, viewport.northeast.lat],
              },
              longitude: {
                between: [viewport.southwest.lng, viewport.northeast.lng],
              },
            },
          }),
        );
        console.log(postsResult);
        setPosts(postsResult.data.listPosts.items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'List'}>
        {() => (
          <SearchResults guests={guests} viewport={viewport} posts={posts} />
        )}
      </Tab.Screen>
      <Tab.Screen name={'Map'}>
        {() => (
          <SearchResultsMap guests={guests} viewport={viewport} posts={posts} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
