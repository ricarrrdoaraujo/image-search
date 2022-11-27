import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const NotItemsResult = () => {

  return (
    <View style={styles.image}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../assets/no-results.webp')}
      />
    </View>
  );
};

export default NotItemsResult;
