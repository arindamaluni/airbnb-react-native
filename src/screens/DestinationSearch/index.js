import React, { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import searchResults from '../../../assets/data/search';
import styles from './styles';

const DestinationSearchScreen = () => {
  const [destination, setDestination] = useState('');
  return (
    <View style={styles.container}>
      {/* {Input compnent} */}
      <TextInput
        style={styles.textInput}
        placeholder={'Where are you going?'}
        value={destination}
        onChangeText={setDestination}
      />
      {/* List of destinations */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} color={'black'} />
            </View>
            <Text style={styles.locationText}> {item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
