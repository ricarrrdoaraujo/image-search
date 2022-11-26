import React, {useEffect, useRef} from 'react';
import {
  FlatList
} from 'react-native';

import SearchListItem from '../SearchListItem';
import {ISearchResult} from '../../models/SearchResult';
import {useAppSelector} from '../../redux/hooks';
import {selectCurrentItemSlice} from '../../redux/slices/currentItemSlice';

interface SearchResultsProps {
  items: ISearchResult[];
  onEndReached: () => void;
  scrollToZero?: any;
}

const SearchList = ({
 items,
 onEndReached,
 scrollToZero,
}: SearchResultsProps) => {
  const flatListRef = useRef<FlatList>(null)
  const currentItem = useAppSelector(selectCurrentItemSlice);

  useEffect(() => {
    if(flatListRef?.current && items.length > 5) {
      flatListRef?.current?.scrollToIndex({
        animated: false, 
        index: currentItem,
        viewPosition: 0.5,
      })
    }
  },[currentItem])

  useEffect(() => {
    scrollToZero(flatListRef.current)
  },[flatListRef])

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={items}
        renderItem={({item, index}) => (
          <SearchListItem
            item={item}
            currentIndex={index}
          />
        )}
        keyExtractor={item => String(item.id)}
        initialNumToRender={7}
        updateCellsBatchingPeriod={30}
        onScrollToIndexFailed={() => {
          flatListRef?.current?.scrollToIndex({
            animated: false, 
            index: 0,
          })
        }}
        onEndReachedThreshold={0.2}
        onEndReached={onEndReached}
      />
    </>
  );
};

export default SearchList;
