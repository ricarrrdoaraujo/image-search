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
  useNavigation, 
  useRoute,
} from '@react-navigation/native';

import {RootStackParamList} from '../../routes/types'
import {IDetails} from '../../models/SearchResult'
import styles from './styles'

type DetailsRouteProp = RouteProp<
  RootStackParamList,
  'Details'
>;

// type DetailsProp = {
//   route: DetailsRouteProp;
// };

type ParamList = {
  Params: IDetails;
};

const Details = () => {
  const router = useRoute<RouteProp<ParamList, 'Params'>>();
  // const navigation = useNavigation();

  console.tron.log(router.params.largeImageURL)
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
