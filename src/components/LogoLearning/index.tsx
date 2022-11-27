import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Logo from '../../assets/logo-learning.svg';

const LogoLearning = () => {

  return (
    <View style={styles.image}>
      <Logo />
    </View>
  );
};

export default LogoLearning;