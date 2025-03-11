import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './CardsListStyle';
import Card from '../Card/Card';
import {products} from '../../../../assets/products';

export default function CardsList() {
  const [shortCardIndex, setShortCardIndex] = useState([1, 2]);
  const [tallCardIndex, setTallCardIndex] = useState([3, 4]);

  // const CheckCardPosition = index => {
  //   if (index === shortCardsIndex[0]) {
  //     setShortCardsIndex([shortCardsIndex[0] + 4, ...shortCardsIndex]);
  //     return 'shortCardRight';
  //   } else if (index === shortCardsIndex[1]) {
  //     setShortCardsIndex([...shortCardsIndex, shortCardsIndex[1] + 4]);
  //     return 'shortCardLeft';
  //   } else if (index === tallCardsIndex[0]) {
  //     setTallCardsIndex([tallCardsIndex[0] + 4, ...tallCardsIndex]);
  //     return 'tallCardRight';
  //   } else if (index === tallCardsIndex[1]) {
  //     setTallCardsIndex([...tallCardsIndex, tallCardsIndex[1] + 4]);
  //     return 'tallCardLeft';
  //   }
  // };
  return (
    <FlatList
      contentContainerStyle={styles.listContentStyle}
      style={styles.listStyle}
      numColumns={2}
      data={products}
      renderItem={({item, index}) => (
        <View key={index} style={styles.cardContainer}>
          <Card
            product={item}
            styling={
              index === shortCardIndex[0]
                ? [styles.ShortCard, styles.ShortCardRight]
                : index === shortCardIndex[1]
                ? [styles.ShortCard, styles.ShortCardLeft]
                : index === tallCardIndex[0]
                ? styles.TallCardRight
                : index === tallCardIndex[1]
                ? styles.TallCardLeft
                : null
            }
          />
        </View>
      )}
    />
  );
}
