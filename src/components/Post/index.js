import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

export default function Post() {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: `https://source.unsplash.com/random/640x480/?places,travel,nature,${Math.floor(
            Math.random() * 1000,
          )}`,
        }}
      />
      {/* Bed and Room */}
      <Text style={styles.bedrooms}>1 Bed 1 Beroom </Text>
      {/* Description */}
      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        pariatur porro fugit cupiditate magni quibusdam! Quasi nulla
        reprehenderit unde fuga dolores, voluptate doloribus autem! Ipsum eum
        iure natus beatae minus.
      </Text>
      {/* Old & New Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$30 </Text>
        <Text style={styles.newPrice}>$25/ night </Text>
      </Text>
      {/* Total Price */}
      <Text style={styles.totalPrice}>Total: $125</Text>
    </View>
  );
}
