import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {AddIcon, SettingsIcon, CommentIcon, PrayerIcon} from '../../../img'
import {IconButtonProps} from '../../../interfaces/button';

export default ({onPress, type}: IconButtonProps) => {

  let fileName;

  switch (type) {
    case 'add':
      fileName = AddIcon;
      break;
    case 'settings':
      fileName = SettingsIcon;
      break;
    case 'comment':
      fileName = CommentIcon;
      break;
    case 'prayer':
      fileName = PrayerIcon;
      break;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={fileName} />
    </TouchableOpacity>
  );
};
