import {StyleProp, TextStyle} from 'react-native';

export interface ButtonStyles {
  button: StyleProp<any>;
  text: TextStyle;
}

export interface TextButtonProps {
  text: string;
  styles: ButtonStyles;
  onPress: () => void;
}

export interface IconButtonProps {
  type: 'add' | 'settings' | 'comment' | 'prayer';
  onPress: (...args: any) => void;
}
