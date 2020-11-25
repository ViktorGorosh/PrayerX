import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {TextButtonProps} from '../../../interfaces/button';

export default ({text, styles, onPress}: TextButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
