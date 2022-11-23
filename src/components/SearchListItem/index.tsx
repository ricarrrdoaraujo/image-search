import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import {ISearchResult} from '../../models/SearchResult';
import styles from './styles';

interface SearchResultProps {
  item: ISearchResult;
}

const SearchListItem = ({
  item,
}: SearchResultProps) => {

  return (
  <TouchableOpacity
    onPress={() => console.tron.log('navigate do details', item)}>
    <Image
      resizeMode="contain"
      style={styles.image}
      source={{uri: item.webformatURL}}
    />
  </TouchableOpacity>
  );
};

export default SearchListItem;
