import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {IconButtonProps} from '../../../interfaces/button';

export default ({onPress, type}: IconButtonProps) => {
  // require() does not work with dynamic values
  const add = require('../../../img/add.png');
  const settings = require('../../../img/settings.png');
  const comment = require('../../../img/comment.png');
  const prayer = require('../../../img/prayer.png');

  let fileName;

  switch (type) {
    case 'add':
      fileName = add;
      break;
    case 'settings':
      fileName = settings;
      break;
    case 'comment':
      fileName = comment;
      break;
    case 'prayer':
      fileName = prayer;
      break;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={fileName} />
    </TouchableOpacity>
  );
};
