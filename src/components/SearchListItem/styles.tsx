import {StyleSheet} from 'react-native';
import { windowWidth } from '../../styles/Dimensions';

console.log({windowWidth})

const styles = StyleSheet.create({
  image: {
    width: windowWidth * .8,
    alignSelf: 'center',
    resizeMode: 'contain',
    aspectRatio: 1.2,
  },
});

export default styles;
