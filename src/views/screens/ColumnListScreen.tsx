import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IconButton} from '../components/IconButton';
import {selectColumns} from '../../state/ducks/column';
import {selectError} from "../../state/ducks/meta";
import {Column} from '../../interfaces/column';
import {ColumnListScreenProps} from "../../interfaces/navigator";
import {Errors} from "../../interfaces/meta";
import generalStyles from './styles';

export default ({navigation}: ColumnListScreenProps) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={() => navigation.navigate('AddColumn')}
          type={'add'}
        />
      ),
    });
  }, [navigation]);

  const columns: Array<Column> = useSelector(selectColumns);
  const errors: Errors = useSelector(selectError);
  console.log(errors)
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
