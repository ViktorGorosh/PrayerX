import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectColumnById} from '../../state/ducks/column';
import {selectColumnCards} from '../../state/ducks/card';
import {CustomTextInput} from '../components/CustomTextInput';
import {Card} from '../../interfaces/card';
import {Column} from '../../interfaces/column';
import {ColumnItemScreenProps} from "../../interfaces/navigator";
import {Store} from "../../interfaces/store";
import generalStyles from './styles';
import {IconButton} from "../components/IconButton";

export default ({route, navigation}: ColumnItemScreenProps) => {

  const column: Column = useSelector((state: Store) => selectColumnById(state, route.params.colId))!;

  const cards: Array<Card> = useSelector((state: Store) =>
    selectColumnCards(state, column.id),
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: column.title
    });
  }, [navigation]);

  return (
    <ScrollView style={generalStyles.container}>
      <CustomTextInput />
      {cards.map((card) => {
        return (
          <View style={styles.cardItem} key={card.id}>
            <View style={generalStyles.flexContainer}>
              <Image
                source={require('../../img/vertical-line.png')}
                style={generalStyles.vertLine}
              />
              <Text
                style={generalStyles.mainText}
                onPress={() =>
                  navigation.navigate('CardItem', {
                    cardId: card.id,
                    colTitle: column.title,
                  })
                }>
                {card.title}
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingRight: 15,
    paddingVertical: 20,
    marginTop: 10,
  },
});
