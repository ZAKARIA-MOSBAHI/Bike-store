import {moderateScale, scale, ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  header: {
    width: scale(350),
    paddingBlock: moderateScale(16),
    flexDirection: 'row',
    justifyContent: 'center',
    marginInline: 'auto',
  },
  child: {
    paddingInline: moderateScale(12),
    width: scale(350),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center', // Centers the child container horizontally
  },
  title: {
    color: 'white',
  },
});
