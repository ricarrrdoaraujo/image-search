import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';
import { useOrientationChange } from "react-native-orientation-locker";

import SearchList from '../../components/SearchList';
import SearchInput from '../../components/SearchInput';
import LogoLearning from '../../components/LogoLearning';
import NotItemsResult from '../../components/NotItemsResult';
import StatusBar from '../../components/StatusBar';

import { getImages } from '../../services/searchImages';
import styles from './styles';
import TextDefault from '../../components/TextDefault';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState<any>([]);
  const [itemToSearch, setItemToSearch] = useState('');
  const [previousItem, setPreviousItem] = useState('');
  const [page, setPage] = useState(1);
  const [scrollCallback, setScrollCallback] = useState<FlatList>();
  const [hideLogo, setHideLogo] = useState<boolean>(false);
  const [showNoItemsResults, setShowNoItemsResults] = useState<boolean>(false);
  const [rateLimitError, setRateLimitError] = useState<string>('');

  const onSearchImage = (item: string) => {
    setItemToSearch(item)
  }

  const verifyPrevious = (text: any) => {
    setShowNoItemsResults(false)
    setRateLimitError('')
    if(itemToSearch == '') {
      setHideLogo(false)
      setSearchResult([])
      return;
    } 
    if(previousItem == itemToSearch) return;
    setHideLogo(true)
    setPage(1)
    onSubmitText(text, page)
  }

  const onSubmitText = async (text: any, pag: number) => {
    setPreviousItem(text.nativeEvent.text)
    const res = await getImages(text.nativeEvent.text, pag);
    if(res.message) {
      setRateLimitError(res.message)
      return;
    }
    res && setSearchResult(res?.data.hits)
    res?.data.hits.length == 0 && setShowNoItemsResults(true)
    scrollCallback &&
    res?.data.hits.length > 0 &&
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

  useOrientationChange((o) => {
    if (o != 'PORTRAIT') {
      setHideLogo(true)
    } else if (o == 'PORTRAIT' && searchResult.length > 0) {
      setHideLogo(true)
    } else {
      setHideLogo(false)
    }
  });

  return (
  <SafeAreaView>
    <StatusBar/>
    <View style={styles.topView}>
      {
        !hideLogo && <LogoLearning />
      }
      <SearchInput 
        onSearchImage={onSearchImage}
        itemToSearch={itemToSearch}
        onSubmit={verifyPrevious}
      />
    </View>
   
    <View style={styles.bottomView}>
      {
        showNoItemsResults ? <NotItemsResult /> : null
      }
      {
        rateLimitError ? <TextDefault>{rateLimitError}</TextDefault> : null
      }
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
