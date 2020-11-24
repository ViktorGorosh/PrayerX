import {StyleProp, TextStyle} from 'react-native';

export interface ButtonStyles {
  button: StyleProp<any>;
  text: TextStyle;
}

export interface ButtonProps {
  text: string;
  styles: ButtonStyles;
  onPress: () => void;
}
