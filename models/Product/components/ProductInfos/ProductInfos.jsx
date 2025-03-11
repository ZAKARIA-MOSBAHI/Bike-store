import React from 'react';
import {Pressable, Text, View} from 'react-native';
import TextBtn from '../../../../components/ui/TextBtn';
import {typography} from '../../../../styles/typography';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-shadow-2';
import {styles} from './ProductInfoStyle';

export default function ProductInfos({
  isOpen,
  activeBtn,
  setActiveBtn,
  product,
  setIsOpen,
}) {
  const buttons = ['Description', 'Specification'];
  return (
    <View
      style={[styles.container, isOpen ? styles.modalOpen : styles.modalClose]}>
      <View style={styles.buttonsRow}>
        {buttons.map((btn, ind) => (
          <Pressable
            key={ind}
            onPress={() => {
              setActiveBtn(btn);
              setIsOpen(true);
            }}>
            <Shadow
              startColor={activeBtn === btn ? '#252B39' : '#323B4F'}
              distance={5}
              opacity={0.5}
              radius={500}>
              <LinearGradient
                style={styles.btn}
                colors={
                  isOpen ? ['#202633', '#364055'] : ['#323B4F', '#323B4F']
                }
                start={{x: 1, y: 1}}
                end={{x: 1, y: 0}}>
                <Text
                  style={[
                    typography.h3,
                    activeBtn === btn
                      ? styles.btnActiveText
                      : styles.btnNotActiveText,
                  ]}>
                  {btn}
                </Text>
              </LinearGradient>
            </Shadow>
          </Pressable>
        ))}
      </View>
      <View style={styles.description}>
        <Text style={[typography.h2, styles.productTitle]}>{product.name}</Text>
        <Text style={[typography.p, styles.productDescription]}>
          {product.description}
        </Text>
      </View>

      <View style={styles.containerFooter}>
        <Text style={[typography.h1, {color: '#3D9CEA'}]}>$ 1,999.99</Text>
        <TextBtn>
          <Text style={[typography.p, {color: 'white'}]}>Add To Cart</Text>
        </TextBtn>
      </View>
    </View>
  );
}
