import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/colors';

export default function TextBtn({children, onPress}) {
  return (
    <LinearGradient
      onPress={onPress}
      style={styles.btn}
      colors={colors.gradientPrimary}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Pressable>{children}</Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: scale(164),
    height: verticalScale(44),
    borderRadius: scale(9),
    alignItems: 'center',
    justifyContent: 'center',
    mixBlendMode: 'screen',
  },
});
