import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import { windowHeight } from '../../styles/Dimensions';

const styles = StyleSheet.create({
  default: {
    fontSize: windowHeight > 850 ? 18 : windowHeight > 650 ? 16 : 14,
    color: Colors.textDefault,
  },
});

export default styles;
