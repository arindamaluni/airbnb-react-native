import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PLACES_API_KEY } from '../../../env';
import styles from './styles';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigator.navigate('Guests');
        }}
        // styles={styles.textInput}
        query={{
          key: PLACES_API_KEY,
          language: 'en',
          type: '(cities)',
        }}
        debounce={500}
        suppressDefaultStyles
        fetchDetails
        renderRow={(data) => <SuggestionRow item={data} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
