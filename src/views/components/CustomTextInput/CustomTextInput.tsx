import React from 'react';
import {TextInput, View} from 'react-native';

import {IconButton} from '@components/IconButton';
import {styles} from './styles';

export default () => {
  return (
    <View style={styles.container}>
      <IconButton onPress={() => 1} type={'add'} />
      <TextInput style={styles.input} placeholder={'Add a prayer...'} />
    </View>
  );
};
