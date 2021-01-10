import React from 'react';
import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

const CustomMarker = (props) => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'red' : '#111',
          padding: 5,
          paddingHorizontal: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: 'lightgrey',
        }}>
        <Text style={{color: '#eee', fontWeight: 'bold'}}>${price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
