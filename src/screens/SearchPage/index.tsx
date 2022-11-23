import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';

import SearchList from '../../components/SearchList';

const baseUrl = 'https://pixabay.com';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);

  const API_KEY = '13795435-b34eaf44529b91465aa96284a';
  const URL = `${baseUrl}/api/?key=${API_KEY}&q=${encodeURIComponent('red roses')}`
  console.log(URL)

  const searchImages = async () => {
    const configObject = {
      method: 'get',
      url: URL
    }
    await axios(configObject).then((res) => {
      setSearchResult(res.data.hits)
      console.tron.log({res})
    });
  }

  useEffect(() => {
    // searchImages()
  },[])

  return (
  <SafeAreaView>
    <StatusBar/>
    <ScrollView>
      <View>
        {
          searchResult ?
          <SearchList 
            items={searchResult}
          /> : null
        }
        
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default SearchPage;
