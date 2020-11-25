import {StyleSheet} from 'react-native';
import {ButtonStyles} from '../../../interfaces/button';

export const mainButtonStyles: ButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#BFB393',
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 17,
    paddingVertical: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});
