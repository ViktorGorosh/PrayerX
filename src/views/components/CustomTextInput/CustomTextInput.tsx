import React, {useCallback, useState} from 'react';
import {TextInput, View} from 'react-native';
import {IconButton} from '../IconButton';
import {CustomTextInputProps} from '../../../interfaces/textInput';
import {styles} from './styles';

export default ({onPress, placeholder}: CustomTextInputProps) => {
  const [text, setText] = useState('');

  const onChangeText = useCallback((text) => {
    setText(text);
  }, []);

  const handlePress = useCallback(() => {
    console.log('clicked');
    onPress(text);
  }, [onPress, text]);

  return (
    <View style={styles.container}>
      <IconButton onPress={handlePress} type={'add'} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};
