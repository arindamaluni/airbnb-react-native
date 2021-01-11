import React, { useEffect, useRef, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarrouselItem';

const SearchResultsMap = () => {
  const width = useWindowDimensions().width;
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const flatList = useRef();
  const mapRef = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      console.log(viewableItems[0].item.id);
      setSelectedPlaceId(() => viewableItems[0].item.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatList) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlaceId);
    flatList.current.scrollToIndex({index});

    const currentPlace = places[index];
    const region = {
      latitude: currentPlace.coordinate.latitude,
      longitude: currentPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    mapRef.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={{height: '100%', width: '100%'}}>
      <MapView
        ref={mapRef}
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
          ref={flatList}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
