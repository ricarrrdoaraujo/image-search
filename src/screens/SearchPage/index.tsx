import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import axios from 'axios';

import SearchList from '../../components/SearchList';
import SearchInput from '../../components/SearchInput';
import { getImages } from '../../services/searchImages';

const baseUrl = 'https://pixabay.com';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [itemToSearch, setItemToSearch] = useState('');

  const onSearchImage = (item: string) => {
    setItemToSearch(item)
  }

  const onSubmitText = async (text: any) => {
    const res = await getImages(text.nativeEvent.text);
    res && setSearchResult(res.data.hits)
  }

  return (
  <SafeAreaView>
    <StatusBar/>
    <SearchInput 
      onSearchImage={onSearchImage}
      itemToSearch={itemToSearch}
      onSubmit={onSubmitText}
    />
      <View>
        {
          searchResult ?
          <SearchList 
            items={searchResult}
          /> : null
        }
      </View>
  </SafeAreaView>
  );
};

export default SearchPage;
