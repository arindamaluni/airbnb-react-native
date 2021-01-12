import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useRef, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarrouselItem';
import { listPosts } from '../../graphql/queries';

const SearchResultsMap = (props) => {
  const { guests } = props;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: { maxGuests: { ge: guests } },
          }),
        );
        console.log(postsResult);
        setPosts(postsResult.data.listPosts.items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);
  const width = useWindowDimensions().width;
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const flatList = useRef();
  const mapRef = useRef();
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      // console.log(viewableItems[0].item.id);
      setSelectedPlaceId(() => viewableItems[0].item.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatList) {
      return;
    }
    const index = posts.findIndex((post) => post.id === selectedPlaceId);
    flatList.current.scrollToIndex({ index });

    const currentPlace = posts[index];
    const region = {
      latitude: currentPlace.latitude,
      longitude: currentPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    mapRef.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <MapView
        ref={mapRef}
        style={{ height: '100%', width: '100%' }}
        provider={PROVIDER_GOOGLE} //Req for running google in iOS
        initialRegion={{
          latitude: 28.2515637,
          longitude: -16.3991304,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {posts.map((post) => (
          <CustomMarker
            key={post.id}
            coordinate={{ latitude: post.latitude, longitude: post.longitude }}
            price={post.newPrice}
            isSelected={post.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(post.id)}
          />
        ))}
      </MapView>
      <View style={{ position: 'absolute', bottom: 10 }}>
        {/* <PostCarouselItem post={posts[0]} /> */}
        <FlatList
          ref={flatList}
          data={posts}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
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
