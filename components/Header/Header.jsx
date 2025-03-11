import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {typography} from '../../styles/typography';
import Button from '../ui/Button';
import {styles} from './HeaderStyle';

export default function Header({
  text,
  iconRight = true,
  textStyle,
  btnVariant,
  onBtnPress,
}) {
  return (
    <View style={styles.header}>
      <View style={styles.child}>
        {!iconRight && <Button variant={btnVariant} onPress={onBtnPress} />}
        <Text style={[styles.title, typography.h2, textStyle]}>{text}</Text>
        {iconRight && <Button variant={btnVariant} onPress={onBtnPress} />}
      </View>
    </View>
  );
}
