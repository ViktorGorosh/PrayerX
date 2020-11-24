import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {selectColumns} from '../../state/ducks/column';
import {Column} from '../../interfaces/column';

export default ({navigation}: any) => {
  const columns: Array<Column> = useSelector(selectColumns);

  return (
    <ScrollView style={styles.columnList}>
      {columns.map((column) => {
        return (
          <View style={styles.columnItem} key={column.id}>
            <Text
              style={styles.columnText}
              onPress={() => navigation.navigate('ColumnItem', {column})}>
              {column.title}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = {
  columnList: {
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  columnItem: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 10,
  },
  columnText: {
    fontSize: 17,
    color: '#514D47',
  },
};
