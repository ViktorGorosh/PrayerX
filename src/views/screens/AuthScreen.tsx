import React, {useCallback, useLayoutEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import {signUp, selectUser} from '../../state/ducks/user';
import {Button, mainButtonStyles} from '../components/TextButton';
import {User} from '../../interfaces/user';

export default ({navigation}: StackScreenProps<any>) => {
  const dispatch = useDispatch();
  const user: User = useSelector(selectUser);

  useLayoutEffect(() => {
    if (user.isAuthorized) {
      navigation.navigate('ColumnList');
    }
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeName = useCallback((text) => setName(text), []);
  const onChangeEmail = useCallback((text) => setEmail(text), []);
  const onChangePassword = useCallback((text) => setPassword(text), []);

  const onSignUp = useCallback(() => {
    if (name === '' || email === '' || password === '') {
      return;
    }

    dispatch(signUp(name, email, password));
  }, [dispatch, email, name, password]);

  return (
    <View style={styles.wrap}>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        onChangeText={onChangeName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={onChangePassword}
      />
      <Button text={'Sign in'} styles={mainButtonStyles} onPress={onSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  // TODO: simplify these styles
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
