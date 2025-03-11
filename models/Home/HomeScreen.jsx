import React, {useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import Categories from './components/Categories/Categories';
import HeroContainer from './components/HeroContainer/HeroContainer';
import {styles} from './HomeScreenStyle';

import Footer from '../../components/Footer/Footer';
import CardsList from './components/CardsList/CardsList';
const background = require('../../assets/images/Background.png');
export default function HomeScreen() {
  return (
    <>
      <Header text={'Choose Your Bike'} />
      <View style={styles.container}>
        <ImageBackground
          source={background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.viewstyle}>
          <HeroContainer />
          <Categories />
          <CardsList />
        </ScrollView>
      </View>
      <Footer />
    </>
  );
}
