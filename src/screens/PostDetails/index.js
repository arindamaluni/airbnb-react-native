import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import PostDetails from '../../components/PostDetails';
const PostDetailsScreen = () => {
  const { post } = useRoute().params;
  return (
    <View>
      <PostDetails post={post} />
    </View>
  );
};

export default PostDetailsScreen;
