import React from 'react';
import {Animated, Dimensions} from 'react-native';

export default function ProductImage({product, position, isOpen}) {
  const {height} = Dimensions.get('window');
  return (
    <Animated.Image
      source={product.largeImage}
      style={{
        transform: [
          {translateX: position},
          {translateY: -height * 0.2},
          {scale: isOpen ? 0.6 : 1},
        ],
        position: 'absolute',
        top: isOpen ? '20%' : '50%',
        left: '50%',
      }}
    />
  );
}
