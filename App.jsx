import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import HomeScreen from './models/Home/HomeScreen';

export default function App() {
  return (
    <>
      <ScrollView style={styles.container}>
        <HomeScreen />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    fontFamily: 'Poppins-Regular',
  },
});
