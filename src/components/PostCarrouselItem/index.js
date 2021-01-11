import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
import styles from './styles';

const PostCarouselItem = ({ post }) => {
  const navigation = useNavigation();
  const goToPostDetails = () => {
    navigation.navigate('PostDetails', { postId: post.id });
  };
  const width = useWindowDimensions().width;
  return (
    <Pressable
      onPress={goToPostDetails}
      style={[styles.container, { width: width - 60 }]}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{ uri: post.image }} />

        <View style={{ flex: 1, margin: 5 }}>
          {/* Bed and Room */}
          <Text style={styles.bedrooms}>
            {post.bed} Bed {post.bedroom} Bedroom{' '}
          </Text>
          {/* Description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.title}
          </Text>
          {/* Old & New Price */}
          <Text style={styles.newPrice}>${post.newPrice}/ night </Text>
          {/* <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post.oldPrice} </Text>
          </Text> */}
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;
