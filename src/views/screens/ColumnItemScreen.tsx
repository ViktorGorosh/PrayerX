import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';

import {selectColumnCards} from '../../state/ducks/card';
import {Card} from '../../interfaces/card';
import {CardInput} from "../components/CardInput";

export default ({route, navigation}: any) => {
  const {column} = route.params;

  const cards: Array<Card> = useSelector((state) =>
    selectColumnCards(state, column.id),
  );

  return (
    <ScrollView style={styles.cardList}>
      <CardInput />
      {cards.map((card) => {
        return (
            <View style={styles.cardItem} key={column.id}>
                {/*TODO: flexContainer style type error*/}
                <View style={{flex: 1, flexDirection: 'row'}} >
                  <Image source={require('../../img/vertical-line.png')} style={styles.vertLine}/>
                  <Text style={styles.cardText}>{card.title}</Text>
                </View>
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
    paddingRight: 15,
    paddingVertical: 20,
    marginTop: 10,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  cardText: {
    fontSize: 17,
    color: '#514D47',
  },
  vertLine: {
    marginRight: 6,
  },
};
