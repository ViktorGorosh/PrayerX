import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {IconButtonProps} from '../../../interfaces/button';

export default ({onPress}: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../../../img/add.png')} />
    </TouchableOpacity>
  );
};
