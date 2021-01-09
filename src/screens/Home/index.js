import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

export default function index() {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Pressable
          style={styles.searchButton}
          onPress={() => console.warn('search Bar clicked')}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        <Text style={styles.title}>Explore</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('button clicked')}>
          <Text style={styles.buttonText}>Explore Nearby</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
