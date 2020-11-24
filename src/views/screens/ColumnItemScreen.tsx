import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';

import {selectColumnCards} from '../../state/ducks/card';
import {Card} from '../../interfaces/card';

export default ({route, navigation}: any) => {
  const {column} = route.params;

  const cards: Array<Card> = useSelector((state) =>
    selectColumnCards(state, column.id),
  );

  return (
    <ScrollView style={styles.cardList}>
      {cards.map((card) => {
        return (
          <View style={styles.cardItem} key={card.id}>
            <Image
              source={{uri: 'https://reactjs.org/logo-og.png'}}
              style={{width: 40, height: 40}}
            />
            <Text style={styles.cardText}>{card.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = {
  cardList: {
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 10,
  },
  cardText: {
    fontSize: 17,
    color: '#514D47',
  },
  leftLine: {
    width: 3,
    height: 22,
  },
};
