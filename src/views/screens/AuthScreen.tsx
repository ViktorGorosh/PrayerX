import React, {useCallback, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';

import {login} from '../../state/ducks/user';
import {Button, mainButtonStyles} from '../components/Button';

export default ({navigation}: StackScreenProps<any>) => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState('');
  const onChangeText = useCallback((text) => setNewName(text), []);
  const handlePress = useCallback(() => {
    if (newName === '') {
      return;
    }

    dispatch(login(newName));
    navigation.navigate('ColumnList');
  }, [dispatch, newName, navigation]);

  return (
    <View style={styles.wrap}>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        onChangeText={onChangeText}
      />
      <TextInput style={styles.textInput} placeholder="Email" />
      <TextInput style={styles.textInput} placeholder="Password" />
      <Button
        text={'Sign in'}
        styles={mainButtonStyles}
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  textInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
    flexBasis: '100%',
  },
});
