import {ScaledSheet, verticalScale} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  cardContainer: {
    flex: 1,
    width: 155,
    height: 256,
    margin: 10,
    paddingBlock: 32,
  },

  TallCardRight: {
    transform: [
      {
        translateY: -48,
      },
    ],
  },

  ShortCard: {
    width: '100%',
    height: verticalScale(219),
    resizeMode: 'stretch',
  },

  ShortCardRight: {
    transform: [
      {
        translateY: -28,
      },
    ],
  },
  ShortCardLeft: {
    transform: [
      {
        translateY: 0,
      },
    ],
  },
});
