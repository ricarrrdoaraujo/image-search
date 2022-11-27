import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
} from 'react-native';
import {
  RouteProp,
  useRoute,
} from '@react-navigation/native';
import Orientation, { useOrientationChange } from "react-native-orientation-locker";

import {IDetails} from '../../models/SearchResult'
import styles from './styles'
import Tag from '../../components/Tag';
import TextDefault from '../../components/TextDefault';

type ParamList = {
  Params: IDetails;
};

const Details = () => {
  const router = useRoute<RouteProp<ParamList, 'Params'>>();
  const [layoutContainer, setLayoutContainer] = useState({})
  const [infoContainer, setInfoContainer] = useState({})

  useEffect(() => {
    Orientation.getDeviceOrientation((o) => {
      if (o != 'PORTRAIT') {
        setLayoutContainer(styles.containerLandscape)
        setInfoContainer(styles.infoContainerLandscape)
      } else {
        setLayoutContainer({})
        setInfoContainer({})
      }
    });
  },[])

  useOrientationChange((o) => {
    if (o != 'PORTRAIT') {
      setLayoutContainer(styles.containerLandscape)
      setInfoContainer(styles.infoContainerLandscape)
    } else {
      setLayoutContainer({})
      setInfoContainer({})
    }
  });

  return (
  <SafeAreaView>
    <StatusBar/>
      <View style={[styles.container, layoutContainer]}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: router.params.largeImageURL}}
        />
        <View style={[styles.infoContainer, infoContainer]}>
          <TextDefault>
            {`${router.params.imageWidth}x${router.params.imageHeight}`}
          </TextDefault>
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
      </View>
  </SafeAreaView>
  );
};

export default Details;
