import React from 'react';
import {View} from 'react-native';
import TextDefault from '../TextDefault';
import styles from './styles';

type TagProps = {
  text: string;
}

const Tag = ({
  text,
}: TagProps) => {

  return (
    <View style={styles.tag}>
      <TextDefault>{text}</TextDefault>
    </View>
  );
};

export default Tag;