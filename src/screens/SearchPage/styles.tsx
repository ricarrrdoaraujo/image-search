import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  topView: {
    paddingTop: StatusBar.currentHeight,
  },
  bottomView: {
    alignItems: 'center'
  }
});

export default styles;
