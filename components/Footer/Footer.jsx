import React, {useState} from 'react';
import {ImageBackground, Pressable, View} from 'react-native';
import {styles} from './FooterStyle';
import BicycleIcon from '../../assets/icons/BicycleIcon';
import MapIcon from '../../assets/icons/MapIcon';
import CartIcon from '../../assets/icons/CartIcon';
import PersonIcon from '../../assets/icons/PersonIcon';
import DocumentIcon from '../../assets/icons/DocumentIcon';
import {colors} from '../../styles/colors';

const footerMenu = [
  {
    name: 'home',
    icon: BicycleIcon,
  },
  {
    name: 'map',
    icon: MapIcon,
  },
  {
    name: 'cart',
    icon: CartIcon,
  },
  {
    name: 'profile',
    icon: PersonIcon,
  },
  {
    name: 'document',
    icon: DocumentIcon,
  },
];
const background = require('../../assets/images/footerBackground.png');
const activeBackground = require('../../assets/images/footerHighlight.png');
export default function Footer() {
  const [selectedItem, setSelectedItem] = useState('home');
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footer}>
        <ImageBackground
          source={background}
          style={styles.footerBackground}
          resizeMode="cover"
        />

        {footerMenu.map((item, index) => (
          <Pressable
            key={index}
            style={styles.footerItem}
            onPress={() => setSelectedItem(item.name)}>
            <ImageBackground
              source={activeBackground}
              style={[
                styles.footerLinkActive,
                selectedItem === item.name && styles.ImageBackgroundActive,
              ]}
              resizeMode="cover"
            />
            <item.icon
              style={[
                styles.footerIcon,
                selectedItem === item.name && styles.iconActive,
              ]}
              fill={selectedItem === item.name ? '#fff' : colors.gray}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}
