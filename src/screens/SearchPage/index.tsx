import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import SearchList from '../../components/SearchList';
import SearchInput from '../../components/SearchInput';
import { getImages } from '../../services/searchImages';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState<any>([]);
  const [itemToSearch, setItemToSearch] = useState('');
  const [previousItem, setPreviousItem] = useState('');
  const [page, setPage] = useState(1);
  const [scrollCallback, setScrollCallback] = useState(null);

  const onSearchImage = (item: string) => {
    setItemToSearch(item)
  }

  const verifyPrevious = (text: any) => {
    if(itemToSearch == '') return;
    if(previousItem == itemToSearch) return;
    setPage(1)
    onSubmitText(text, page)
  }

  const onSubmitText = async (text: any, pag: number) => {
    setPreviousItem(text.nativeEvent.text)
    const res = await getImages(text.nativeEvent.text, pag);
    res && setSearchResult(res?.data.hits)
    scrollCallback &&
    scrollCallback.scrollToIndex({
      animated: false, 
      index: 1,
      viewPosition: 0.5,
    })
  }

  const handleEndReached = () => {
    setPage(page + 1)
  }

  const onSearchNewPage = async () => {
    const res = await getImages(itemToSearch, page);
    res && setSearchResult((currentItems: any) => 
    ([...currentItems, ...res?.data.hits]))
  }

  useEffect(() => {
    if (itemToSearch == previousItem && page > 1) {
      onSearchNewPage()
    }
  },[page])

  return (
  <SafeAreaView>
    <StatusBar/>
    <SearchInput 
      onSearchImage={onSearchImage}
      itemToSearch={itemToSearch}
      onSubmit={verifyPrevious}
    />
      <View>
        {
          searchResult ?
          <SearchList 
            items={searchResult}
            onEndReached={handleEndReached}
            scrollToZero={setScrollCallback}
          /> : null
        }
      </View>
  </SafeAreaView>
  );
};

export default SearchPage;
