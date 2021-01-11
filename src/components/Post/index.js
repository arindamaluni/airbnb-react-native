import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text } from 'react-native';
import styles from './styles';

const Post = ({ post }) => {
  const navigation = useNavigation();
  const goToPostDetails = () => {
    navigation.navigate('PostDetails', { postId: post.id });
  };
  return (
    <Pressable onPress={goToPostDetails} style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{ uri: post.image }} />
      {/* Bed and Room */}
      <Text style={styles.bedrooms}>
        {post.bed} Bed {post.bedroom} Bedroom{' '}
      </Text>
      {/* Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.title}
      </Text>
      {/* Old & New Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}>${post.newPrice}/ night </Text>
      </Text>
      {/* Total Price */}
      <Text style={styles.totalPrice}>Total: ${post.totalPrice}</Text>
    </Pressable>
  );
};

export default Post;
