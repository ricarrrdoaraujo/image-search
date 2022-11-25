import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
} from 'react-native';
import {
  RouteProp,
  useRoute,
} from '@react-navigation/native';

import {IDetails} from '../../models/SearchResult'
import styles from './styles'

type ParamList = {
  Params: IDetails;
};

const Details = () => {
  const router = useRoute<RouteProp<ParamList, 'Params'>>();

  return (
  <SafeAreaView>
    <StatusBar/>
    <ScrollView>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: router.params.largeImageURL}}
        />
        <View>
          <Text>
            {`${router.params.imageWidth}x${router.params.imageHeight}`}
          </Text>
        </View>
        <Text>
          {`Uploaded by ${router.params.user}`}
        </Text>
        <View style={styles.tags}>
          {
            router.params.tags
            .split(', ')
            .map((item: string) => <Text key={item}>{`${item} `}</Text>)
          }
        </View>  
        
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default Details;
