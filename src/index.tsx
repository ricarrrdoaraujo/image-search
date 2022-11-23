import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SearchPage from './screens/SearchPage';

const App = () => {

  return (
    <SafeAreaView>
      <SearchPage />
      {/* <StatusBar/>
      <ScrollView>
        <View>
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default App;
