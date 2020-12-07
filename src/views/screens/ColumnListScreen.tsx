import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IconButton} from '../components/IconButton';
import {getColumns, selectColumns} from '../../state/ducks/column';
import {selectError, selectLoading} from "../../state/ducks/meta";
import {ColumnListScreenProps} from "../../interfaces/navigator";
import generalStyles from './styles';

export default ({navigation}: ColumnListScreenProps) => {

  const dispatch = useDispatch()
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={() => navigation.navigate('AddColumn')}
          type={'add'}
        />
      ),
    });
    dispatch(getColumns())
  }, [navigation]);

  const columns = useSelector(selectColumns);

  return (
    <View style={generalStyles.container}>
      <ScrollView>
        {columns.map((column) => {
          return (
            <View style={styles.columnItem} key={column.id}>
              <Text
                style={generalStyles.mainText}
                onPress={() => navigation.navigate('ColumnItem', {colId: column.id})}>
                {column.title}
              </Text>
            </View>
          );
        })}

        {isLoading ? <Text style={generalStyles.mainText}>Загрузка...</Text> : null}
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
  // columnText: {
  //   fontSize: 17,
  //   color: '#514D47',
  // },
};
