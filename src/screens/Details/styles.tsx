import {StyleSheet, StatusBar} from 'react-native';
import { windowWidth } from '../../styles/Dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 70,
  },
  image: {
    width: windowWidth - 20,
    alignSelf: 'center',
    resizeMode: 'contain',
    aspectRatio: 1.2,
  },
  tags: {
    flexDirection: 'row',
  },
});

export default styles;
