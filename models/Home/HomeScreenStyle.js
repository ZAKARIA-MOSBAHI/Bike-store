import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    zIndex: 0,
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute', // Fix the background image
    top: 0,
    left: 0,

    zIndex: 0, // Ensure the background stays behind the content
  },
  scrollViewContent: {
    zIndex: 11, // Ensure the content is on top of the background
    flexGrow: 1,
  },
});
