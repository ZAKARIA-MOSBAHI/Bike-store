import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/colors';
import SearchIcon from '../../assets/icons/SearchIcon';
import BackIcon from '../../assets/icons/BackIcon';
import HideIcon from '../../assets/icons/HideIcon';

export default function Button({variant = 'search', onPress}) {
  const variants = {
    search: {icon: SearchIcon},
    back: {icon: BackIcon},
    hide: {icon: HideIcon},
  };

  return (
    <LinearGradient
      style={styles.btnContainer}
      colors={colors.gradientPrimary}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Pressable style={styles.btn} onPress={onPress}>
        {variants[variant].icon}
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: scale(9),
  },
  btn: {
    width: scale(44),
    height: verticalScale(44),
    alignItems: 'center',
    justifyContent: 'center',
    mixBlendMode: 'screen',
  },
});
