import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import {ISearchResult} from '../../models/SearchResult';

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
      style={{
        width: '60%',
        aspectRatio: 1.3,
        alignSelf: 'center',
      }}
      source={{uri: item.previewURL}}
    />
  </TouchableOpacity>
  );
};

export default SearchListItem;
