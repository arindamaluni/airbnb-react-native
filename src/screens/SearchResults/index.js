import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Post from '../../components/Post';
import { listPosts } from '../../graphql/queries';

const SearchResults = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(graphqlOperation(listPosts));
        console.log(postsResult);
        setPosts(postsResult.data.listPosts.items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default SearchResults;
