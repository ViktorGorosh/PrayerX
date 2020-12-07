import React, {useCallback, useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {signUp, signIn, selectUser} from '../../state/ducks/user';
import {Button, mainButtonStyles} from '../components/TextButton';
import {AuthScreenProps} from "../../interfaces/navigator";
import generalStyles from './styles';

export default ({navigation}: AuthScreenProps) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useLayoutEffect(() => {
    if (user.isAuthorized) {
      navigation.replace('ColumnList');
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

    dispatch(signUp({name, email, password}));
  }, [dispatch, email, name, password]);

  const onSignIn = useCallback(() => {
    if (email === '' || password === '') {
      return;
    }
    dispatch(signIn({email, password}));
  }, [dispatch, email, password]);

  return (
    <View style={generalStyles.container}>
      <TextInput
        style={styles.textInput}
        textContentType={'username'}
        placeholder="Username"
        onChangeText={onChangeName}
      />
      <TextInput
        style={styles.textInput}
        textContentType={'emailAddress'}
        placeholder="Email"
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.textInput}
        textContentType={'password'}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={onChangePassword}
      />
      {user.isLoading ? <Text style={generalStyles.mainText}>Загрузка...</Text> : null}
      {user.isFailed ? <Text style={generalStyles.mainText}>Неверный email или пароль</Text> : null}
      {user.error ? <Text style={generalStyles.mainText}>Ошибка загрузки данных</Text> : null}

      <Button text={'Sign in'} styles={mainButtonStyles} onPress={onSignIn} />
      <Button text={'Sign up'} styles={mainButtonStyles} onPress={onSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
    width: '100%',
  },
});
