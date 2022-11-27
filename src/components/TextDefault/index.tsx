import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

type TextDefaultProps = {
  children: any;
  style?: any;
  bold?: boolean;
};

const TextDefault = ({
  children,
  style,
  bold,
}: TextDefaultProps) => {

  return (
    <Text style={[
      styles.default, 
      style, 
      {fontWeight: bold ? 'bold' : 'normal'}]}>
      {children}
    </Text>
  );
};

export default TextDefault;