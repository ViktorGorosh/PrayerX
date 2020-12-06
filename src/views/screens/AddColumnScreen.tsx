import React, {useCallback, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, mainButtonStyles} from '../components/TextButton';
import {addColumn} from '../../state/ducks/column';
import generalStyles from './styles';
import {AddColumnScreenProps} from "../../interfaces/navigator";

export default ({navigation}: AddColumnScreenProps) => {
  const dispatch = useDispatch();

  const [newColTitle, setNewColTitle] = useState('');

  const onChangeNewColTitle = useCallback((text) => setNewColTitle(text), []);
  const onColumnAdd = useCallback(() => {
    if (newColTitle === '') {
      return;
    }

    setNewColTitle('');
    dispatch(addColumn(newColTitle));
    navigation.goBack();
  }, [dispatch, navigation, newColTitle]);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrap}>
        <TextInput
          style={generalStyles.mainText}
          placeholder={'Add new column title...'}
          autoFocus={true}
          onChangeText={onChangeNewColTitle}
        />
      </View>
      <Button styles={mainButtonStyles} text={'Add'} onPress={onColumnAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  inputWrap: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    padding: 5,
    flexBasis: '100%',
  },
  // input: {
  //   fontSize: 17,
  //   color: '#514D47',
  // }
});
