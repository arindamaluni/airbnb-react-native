/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
// import Post from './src/components/Post';
// import SearchResultsScreen from './src/screens/SearchResults';
// import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestScreen from './src/screens/Guests';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={feed[0]} /> */}
        {/* <SearchResultsScreen /> */}
        {/* <DestinationSearchScreen /> */}
        <GuestScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
