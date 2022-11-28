import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import TextDefault from '../TextDefault';


const NotItemsResult = () => {

  return (
    <View style={styles.container}>
      <TextDefault bold>There are no results to show.</TextDefault>
    </View>
  );
};

export default NotItemsResult;
