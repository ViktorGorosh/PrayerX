import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import {selectColumns} from '../../state/ducks/column';
import {Column} from '../../interfaces/column';
import {StackNavigationOptions} from "@react-navigation/stack";
import {IconButton} from "../components/IconButton";

interface ColumnItemScreenOptions extends StackNavigationOptions {
  column: Column;
}

export default ({navigation}: any) => {
  const columns: Array<Column> = useSelector(selectColumns);

  return (
    <ScrollView style={styles.container}>
      {columns.map((column) => {
        const options: ColumnItemScreenOptions = {
          column,
          headerRight: () => (
            <TouchableOpacity >
              <Image source={require('../../img/add.png')} />
            </TouchableOpacity>
          )
        };
        return (
          <View style={styles.columnItem} key={column.id}>
            <Text
              style={styles.columnText}
              onPress={() => navigation.navigate('ColumnItem', options)}>
              {column.title}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = {
  container: {
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
