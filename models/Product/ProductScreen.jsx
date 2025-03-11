import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, ImageBackground, View, Dimensions} from 'react-native';
import Header from '../../components/Header/Header';
import {colors} from '../../styles/colors';
import {products} from '../../assets/products';
import ProductImage from './components/ProductImage';
import ProductInfos from './components/ProductInfos/ProductInfos';

const background = require('../../assets/images/Background.png');

export default function ProductScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);
  const opacity = useRef(new Animated.Value(0)).current;
  const route = useRoute();
  const routeParams = route.params;
  const product = products.find(p => p.id === routeParams.productId);

  const {width, height} = Dimensions.get('window');
  const position = useRef(new Animated.Value(-width * 2)).current; // Start from -width (off-screen left)
  const navigation = useNavigation();

  useEffect(() => {
    // Animate opacity
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    // Animate position
    Animated.timing(position, {
      toValue: -width * 0.5,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [opacity, position]);

  return (
    <>
      <Header
        onBtnPress={
          isOpen
            ? () => {
                setIsOpen(false);
                setActiveBtn(null);
              }
            : () => navigation.goBack()
        }
        iconRight={false}
        text={product.name}
        textStyle={{marginInline: 'auto'}}
        btnVariant={isOpen ? 'hide' : 'back'}
      />
      <View
        style={{
          position: 'relative',
          backgroundColor: colors.background,
          flex: 1,
        }}>
        <Animated.View
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            opacity: opacity,
          }}>
          <ImageBackground
            source={background}
            style={{flex: 1}}
            resizeMode="cover"
          />
        </Animated.View>

        <ProductImage
          isOpen={isOpen}
          product={product}
          position={position}
          height={height}
        />
        <ProductInfos
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          product={product}
          height={height}
        />
      </View>
    </>
  );
}
