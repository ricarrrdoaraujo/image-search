import React, {useEffect, useRef, useState, useCallback} from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import { useOrientationChange } from "react-native-orientation-locker";

import SearchListItem from '../SearchListItem';
import {ISearchResult} from '../../models/SearchResult';
import {useAppSelector} from '../../redux/hooks';
import {selectCurrentItemSlice} from '../../redux/slices/currentItemSlice';
import styles from './styles';

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
  const [orientation, setOrientation] = useState('PORTRAIT');
  const [viewableItem, setViewableItem] = useState<number>(0);
  const viewablePreviousItem = useRef(0);

  useOrientationChange((o) => {
    setOrientation(o);
    if(flatListRef?.current && items.length > 5) {
      flatListRef?.current?.scrollToIndex({
        animated: false, 
        index: viewableItem,
        viewPosition: 0.5,
      })
    }
  });

  useEffect(() => {
    if(flatListRef?.current && items.length > 5) {
      flatListRef?.current?.scrollToIndex({
        animated: false, 
        index: currentItem,
        viewPosition: 0.5,
      })
    }
  },[currentItem])

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 95,
  })

  useEffect(() => {
    viewablePreviousItem.current = viewableItem;
  },[viewableItem])

  const verifyPreviousItem = (viewableItem: any) => {
    if (viewableItem.length == 0) {
      return viewablePreviousItem.current;
    } else {
      return viewableItem[0]?.index
    }
  }

  const onViewableItemsChanged = useCallback(({viewableItems}: any) => {
    if (viewableItems.length != 0) {
      setViewableItem(verifyPreviousItem(viewableItems))
    }
  },[])

  useEffect(() => {
    scrollToZero(flatListRef.current)
  },[flatListRef])

  const footer = () => <View style={styles.footer} />
  

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={items}
        renderItem={({item, index}) => (
          <SearchListItem
            item={item}
            currentIndex={index}
            orientation={orientation}
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
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig.current}
        ListFooterComponent={footer}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default SearchList;
