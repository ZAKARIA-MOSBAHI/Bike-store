// import React, {useState} from 'react';
// import {FlatList, View} from 'react-native';
// import {styles} from './CardsListStyle';
// import Card from '../Card/Card';
// import {products} from '../../../../assets/products';

// export default function CardsList() {
//   const [shortCardsIndex, setShortCardsIndex] = useState([1, 2]);
//   const [tallCardsIndex, setTallCardsIndex] = useState([3, 4]);

//   // const CheckCardPosition = index => {
//   //   if (index === shortCardsIndex[0]) {
//   //     setShortCardsIndex([shortCardsIndex[0] + 4, ...shortCardsIndex]);
//   //     return 'shortCardRight';
//   //   } else if (index === shortCardsIndex[1]) {
//   //     setShortCardsIndex([...shortCardsIndex, shortCardsIndex[1] + 4]);
//   //     return 'shortCardLeft';
//   //   } else if (index === tallCardsIndex[0]) {
//   //     setTallCardsIndex([tallCardsIndex[0] + 4, ...tallCardsIndex]);
//   //     return 'tallCardRight';
//   //   } else if (index === tallCardsIndex[1]) {
//   //     setTallCardsIndex([...tallCardsIndex, tallCardsIndex[1] + 4]);
//   //     return 'tallCardLeft';
//   //   }
//   // };
//   return (
//     <FlatList
//       numColumns={2}
//       data={products}
//       renderItem={({item, index}) => {
//         const style = CheckCardPosition(index);

//         return (
//           <View key={index} style={styles.cardContainer}>
//             <Card
//               product={item}
//               styling={
//                 style === 'shortCardRight'
//                   ? [styles.ShortCard, styles.ShortCardRight]
//                   : style === 'shortCardLeft'
//                   ? [styles.ShortCard, styles.ShortCardLeft]
//                   : style === 'tallCardRight'
//                   ? styles.TallCardRight
//                   : null
//               }
//             />
//           </View>
//         );
//       }}
//     />
//   );
// }
