import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {typography} from '../../styles/typography';
import Button from '../ui/Button';
import {styles} from './HeaderStyle';

export default function Header({text, iconRight = true}) {
  return (
    <View style={styles.header}>
      <View style={styles.child}>
        {!iconRight && <Button />}
        <Text style={[styles.title, typography.h2]}>{text}</Text>
        {iconRight && <Button />}
      </View>
    </View>
  );
}
