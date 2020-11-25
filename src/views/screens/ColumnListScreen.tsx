import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {StackScreenProps} from "@react-navigation/stack";
import {IconButton} from "../components/IconButton";
import {selectColumns} from '../../state/ducks/column';
import {Column} from '../../interfaces/column';

export default ({navigation}: StackScreenProps<any>) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton onPress={() => navigation.navigate('Add column')} type={'add'} />
      ),
    });
  }, [navigation]);

  const columns: Array<Column> = useSelector(selectColumns);

  return (
    <View style={styles.container}>
      <ScrollView >
        {columns.map((column) => {
          return (
            <View style={styles.columnItem} key={column.id}>
              <Text
                style={styles.columnText}
                onPress={() => navigation.navigate('ColumnItem', {column})}
              >
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
  container: {
    flex: 1,
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
