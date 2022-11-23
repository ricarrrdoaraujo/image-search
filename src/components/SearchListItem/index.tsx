import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {ISearchResult} from '../../models/SearchResult';
import styles from './styles';

import {RootStackParamList} from '../../routes/types'
interface SearchResultProps {
  item: ISearchResult;
}

const SearchListItem = ({
  item,
}: SearchResultProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Details'>>();

  const details = {
    user: item.user,
    tags: item.tags,
    largeImageURL: item.largeImageURL,
    imageWidth: item.imageWidth,
    imageHeight: item.imageHeight,
  }

  return (
  <TouchableOpacity
    onPress={() => navigation.navigate('Details', {
      user: item.user,
      tags: item.tags,
      largeImageURL: item.largeImageURL,
      imageWidth: item.imageWidth,
      imageHeight: item.imageHeight,
    })}>
    <Image
      resizeMode="contain"
      style={styles.image}
      source={{uri: item.webformatURL}}
    />
  </TouchableOpacity>
  );
};

export default SearchListItem;
