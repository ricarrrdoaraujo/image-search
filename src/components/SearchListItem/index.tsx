import React from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {ISearchResult} from '../../models/SearchResult';
import styles from './styles';

import {RootStackParamList} from '../../routes/types';
import {useAppDispatch} from '../../redux/hooks';
import {setCurrentItem} from '../../redux/slices/currentItemSlice';

interface SearchResultProps {
  item: ISearchResult;
  currentIndex: number;
  orientation: string;
}

const SearchListItem = ({
  item,
  currentIndex,
}: SearchResultProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Details'>>();
  const dispatch = useAppDispatch();

  const handleNavigation = () => {
    dispatch(setCurrentItem(currentIndex))
    navigation.navigate('Details', {
      user: item.user,
      tags: item.tags,
      largeImageURL: item.largeImageURL,
      imageWidth: item.imageWidth,
      imageHeight: item.imageHeight,
    })
  }

  return (
  <TouchableOpacity
    onPress={handleNavigation}>
    <Image
      resizeMode="contain"
      style={styles.image}
      source={{uri: item.webformatURL}}
    />
  </TouchableOpacity>
  );
};

export default SearchListItem;
