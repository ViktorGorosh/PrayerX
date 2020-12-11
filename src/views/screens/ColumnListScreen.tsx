import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IconButton} from '../components/IconButton';
import {
  getColumns,
  selectColumns,
  updateColumn,
} from '../../state/ducks/column';
import {getCards} from '../../state/ducks/card';
import {selectError, selectLoading} from '../../state/ducks/meta';
import {ColumnListScreenProps} from '../../interfaces/navigator';
import {Column} from '../../interfaces/column';
import generalStyles from './styles';

export default ({navigation}: ColumnListScreenProps) => {
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={() => navigation.navigate('AddColumn')}
          type={'add'}
        />
      ),
    });
    dispatch(getColumns());
    dispatch(getCards());
  }, [navigation]);

  const columns = useSelector(selectColumns);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const [editingColumn, setEditingColumn] = useState<undefined | Column['id']>(
    undefined,
  );
  const [colTitle, setColTitle] = useState('');

  return (
    <View style={generalStyles.container}>
      <ScrollView>
        {columns.map((column) => {
          return (
            <View style={styles.columnItem} key={column.id}>
              {column.id === editingColumn ? (
                <TextInput
                  style={[generalStyles.mainText, styles.textInput]}
                  defaultValue={column.title}
                  autoFocus={true}
                  onChangeText={(text) => setColTitle(text)}
                  onBlur={() => {
                    if (colTitle === '') {
                      return;
                    }

                    dispatch(
                      updateColumn({
                        title: colTitle,
                        description: '',
                        id: column.id,
                      }),
                    );
                    setColTitle('');
                    setEditingColumn(undefined);
                  }}
                />
              ) : (
                <Text
                  style={generalStyles.mainText}
                  onPress={() =>
                    navigation.navigate('ColumnItem', {colId: column.id})
                  }
                  onLongPress={() => setEditingColumn(column.id)}>
                  {column.title}
                </Text>
              )}
            </View>
          );
        })}

        {isLoading ? (
          <Text style={generalStyles.mainText}>Загрузка...</Text>
        ) : null}
        {error ? <Text style={generalStyles.mainText}>{error}</Text> : null}
      </ScrollView>
    </View>
  );
};

const styles = {
  // container: {
  //   padding: 15,
  //   backgroundColor: '#FFFFFF',
  // },
  columnItem: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 10,
  },
  textInput: {
    padding: 0,
  },
  // columnText: {
  //   fontSize: 17,
  //   color: '#514D47',
  // },
};
