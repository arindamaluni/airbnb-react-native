import React, { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarrouselItem';

const SearchResultsMap = () => {
  const width = useWindowDimensions().width;
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  return (
    <View style={{height: '100%', width: '100%'}}>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE} //Req for running google in iOS
        initialRegion={{
          latitude: 28.2515637,
          longitude: -16.3991304,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {places.map((place) => (
          <CustomMarker
            clickHandler={setSelectedPlaceId}
            key={place.id}
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        {/* <PostCarouselItem post={places[0]} /> */}
        <FlatList
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
