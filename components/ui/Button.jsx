import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/colors';
import SearchIcon from '../../assets/icons/SearchIcon';

export default function Button() {
  return (
    <LinearGradient
      style={styles.btn}
      colors={colors.gradientPrimary}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Pressable>
        <SearchIcon style={styles.icon} />
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: scale(44),
    height: verticalScale(44),
    borderRadius: scale(9),
    alignItems: 'center',
    justifyContent: 'center',
    mixBlendMode: 'screen',
  },
});
