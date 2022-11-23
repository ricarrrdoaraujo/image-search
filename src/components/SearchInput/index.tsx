import React, {useEffect} from 'react';
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

import SearchListItem from '../SearchListItem';
import {ISearchResult} from '../../models/SearchResult';
import styles from './styles';

interface SearchInputProps {
  itemToSearch: string;
  onSearchImage: (text: string) => void;
  onSubmit: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
}

const SearchInput = ({
 itemToSearch,
 onSearchImage,
 onSubmit,
}: SearchInputProps) => {

  // console.tron.log({items})

  useEffect(() => {
  },[[]])

  return (
    <>
     <TextInput 
      style={styles.input}
      onChangeText={onSearchImage}
      value={itemToSearch}
      placeholder="Search..."
      onSubmitEditing={onSubmit}
    />
    </>
  );
};

export default SearchInput;
