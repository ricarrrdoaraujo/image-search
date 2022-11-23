import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';

import SearchList from '../../components/SearchList';
import SearchInput from '../../components/SearchInput';

const baseUrl = 'https://pixabay.com';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [itemToSearch, setItemToSearch] = useState('');

  const API_KEY = '13795435-b34eaf44529b91465aa96284a';
  const URL = (text: string) => (`${baseUrl}/api/?key=${API_KEY}&q=${encodeURIComponent(text)}`)

  const searchImages = async (textSearch: string) => {
    const configObject = {
      method: 'get',
      url: URL(textSearch)
    }
    await axios(configObject).then((res) => {
      setSearchResult(res.data.hits)
    });
  }

  const onSearchImage = (item: string) => {
    setItemToSearch(item)
  }

  const onSubmitText = async (text: any) => {
    await searchImages(text.nativeEvent.text);
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
