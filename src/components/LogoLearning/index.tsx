import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Logo from '../../assets/logo-learning.svg';

const LogoLearning = () => {

  const onChangeOrientation = () => {
    // if (orientation != 'PORTRAIT') {
    // }
  }

  return (
    <View style={styles.image}>
      <Logo />
    </View>
  );
};

export default LogoLearning;
