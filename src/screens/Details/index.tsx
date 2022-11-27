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
import Tag from '../../components/Tag';
import TextDefault from '../../components/TextDefault';

type ParamList = {
  Params: IDetails;
};

const Details = () => {
  const router = useRoute<RouteProp<ParamList, 'Params'>>();

  return (
  <SafeAreaView>
    <StatusBar/>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: router.params.largeImageURL}}
        />
        <View>
          <TextDefault>
            {`${router.params.imageWidth}x${router.params.imageHeight}`}
          </TextDefault>
        </View>
        <TextDefault>
          Uploaded by
          <TextDefault bold>{` ${router.params.user}`}</TextDefault>
        </TextDefault>
        <View style={styles.tags}>
          {
            router.params.tags
            .split(', ')
            .map((item: string) => <Tag key={item} text={item}/>)
          }
        </View>  
      </View>
  </SafeAreaView>
  );
};

export default Details;
