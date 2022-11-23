import React, {useEffect} from 'react';
import {
  FlatList
} from 'react-native';

import SearchListItem from '../SearchListItem';
import {ISearchResult} from '../../models/SearchResult';

interface SearchResultsProps {
  items: ISearchResult[];
}

const SearchList = ({
 items,
}: SearchResultsProps) => {

  // console.tron.log({items})

  useEffect(() => {
  },[[]])

  return (
    <>
      <FlatList
        data={items}
        renderItem={({item, index}) => (
          <SearchListItem
            item={item}
          />
        )}
        keyExtractor={item => String(item.id)}
        initialNumToRender={7}
        updateCellsBatchingPeriod={30}
      />
    </>
  );
};

export default SearchList;
