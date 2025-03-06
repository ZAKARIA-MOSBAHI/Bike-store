import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../components/Header/Header';
import Categories from './components/Categories/Categories';
import HeroContainer from './components/HeroContainer/HeroContainer';
import {styles} from './HomeScreenStyle';

import {products} from '../../assets/products';
import Card from './components/Card/Card';
import {scale, verticalScale} from 'react-native-size-matters';

const background = require('../../assets/images/Background.png');
export default function HomeScreen() {
  const arr = [1, 2];
  const arr1 = [3, 4];
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Header text={'Choose Your Bike'} />
          <HeroContainer />
          <Categories />

          <FlatList
            style={{paddingBlock: 12}}
            numColumns={2}
            data={products}
            renderItem={({item, index}) => (
              <View key={index} style={styling.cardContainer}>
                <Card
                  product={item}
                  styling={
                    arr.includes(index) && index === arr[0]
                      ? [styling.ShortCard, styling.ShortCardRight]
                      : arr.includes(index) && index === arr[1]
                      ? [styling.ShortCard, styling.ShortCardLeft]
                      : index === 3
                      ? styling.TallCardRight
                      : null
                  }
                />
              </View>
            )}
          />

          <Text style={{padding: 100}}>dfdfd</Text>
        </ScrollView>
      </View>
    </>
  );
}
const styling = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: 155,
    height: 256,
    margin: 10,
    paddingBlock: 32,
  },

  TallCardRight: {
    transform: [
      {
        translateY: -48,
      },
    ],
  },

  ShortCard: {
    width: '100%',
    height: verticalScale(219),
    resizeMode: 'stretch',
  },

  ShortCardRight: {
    transform: [
      {
        translateY: -28,
      },
    ],
  },
  ShortCardLeft: {
    transform: [
      {
        translateY: 0,
      },
    ],
  },
});
