import React, {useState} from 'react';
import {ImageBackground, View, Text, Image, Pressable} from 'react-native';
import {styles} from './CardStyle';
import HeartIcon from '../../../../assets/icons/HeartIcon';
import {typography} from '../../../../styles/typography';

const bg = require('../../../../assets/images/card.png');
export default function Card({styling, variant = 'first', product}) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Pressable style={({pressed}) => [styles.card, pressed && styles.pressed]}>
      <ImageBackground
        source={bg}
        resizeMode="stretch"
        style={[
          styles.background,
          styling,
          variant === 'first'
            ? styles.FirstCard
            : variant === 'second'
            ? styles.SecondCard
            : null,
        ]}>
        <View style={styles.productImageContainer}>
          <Image source={product.img} style={styles.productImage} />
          <Pressable
            onPress={() => setIsFavorite(!isFavorite)}
            style={styles.heartBtn}>
            <HeartIcon isFavorite={isFavorite} />
          </Pressable>
        </View>
        <View style={[styles.cardinfo]}>
          <Text style={[styles.category, typography.h4]}>
            {product.category}
          </Text>
          <Text style={[styles.name, typography.p]}>{product.name}</Text>
          <Text style={[styles.price, typography.h4]}>$ {product.price}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
