import {StyleSheet, StatusBar} from 'react-native';
import { windowWidth } from '../../styles/Dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 70,
  },
  containerLandscape: {
    flexDirection: 'row', 
    alignContent: 'center', 
    justifyContent: 'space-between', 
    paddingTop: 40,
    paddingHorizontal: 20,
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
  infoContainer: {
    alignItems: 'center',
  },
  infoContainerLandscape: {
    flex: 1, 
    alignContent: 'center'}
});

export default styles;
