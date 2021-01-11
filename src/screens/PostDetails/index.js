import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import places from '../../../assets/data/feed';
import PostDetails from '../../components/PostDetails';
const PostDetailsScreen = () => {
  const route = useRoute();
  const postRef = route.params;
  console.log(postRef);
  const place = places.filter((place) => place.id === postRef.postId);
  console.log(place);
  return (
    <View>
      <PostDetails post={place[0]} />
    </View>
  );
};

export default PostDetailsScreen;
