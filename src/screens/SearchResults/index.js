import React from 'react';
import { FlatList, View } from 'react-native';
import Post from '../../components/Post';

const SearchResults = (props) => {
  const { posts } = props;
  return (
    <View>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default SearchResults;
