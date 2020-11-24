import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../../../interfaces/button';

export default ({text, styles, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
