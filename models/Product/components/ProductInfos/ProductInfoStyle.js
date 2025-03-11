import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
const {height} = Dimensions.get('window');
export const styles = ScaledSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#323B4F',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    height: height * 0.65,
  },
  buttonsRow: {
    flexDirection: 'row',
    paddingBlock: '32@s',
    gap: '16@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {borderRadius: '10@s', paddingBlock: '10@vs', paddingInline: '20@s'},
  btnNotActiveText: {
    color: 'gray',
  },
  btnActiveText: {
    color: 'white',
  },
  description: {gap: '8@s', paddingInline: '16@s'},
  productTitle: {
    color: 'white',
  },
  productDescription: {
    color: 'gray',
  },
  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32@s',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: '#262E3D',
    width: '100%',
    paddingBlock: '32@vs',
    marginBlock: '40@vs',
    elevation: 100,
    borderWidth: 2,
    borderColor: '#29212125',
    shadowColor: '#1C222E',
  },
  modalOpen: {
    bottom: 0,
  },
  modalClose: {
    bottom: -380,
  },
});
