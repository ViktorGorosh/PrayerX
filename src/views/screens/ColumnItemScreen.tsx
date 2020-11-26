import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {selectColumnCards} from '../../state/ducks/card';
import {CardInput} from "../components/CardInput";
import {Card} from '../../interfaces/card';
import generalStyles from './styles'

export default ({route, navigation}: any ) => {
  const {column} = route.params;

  const cards: Array<Card> = useSelector((state) =>
    selectColumnCards(state, column.id),
  );

  return (
    <ScrollView style={generalStyles.container}>
      <CardInput />
      {cards.map((card) => {
        return (
            <View style={styles.cardItem} key={card.id}>
                {/*TODO: flexContainer style type error*/}
                <View style={{flex: 1, flexDirection: 'row'}} >
                  <Image source={require('../../img/vertical-line.png')} style={generalStyles.vertLine}/>
                  <Text
                    style={generalStyles.mainText}
                    onPress={() => navigation.navigate('CardItem', {card, colTitle: column.title})}
                  >
                    {card.title}
                  </Text>
                </View>
            </View>
        );
      })}
    </ScrollView>
  );
};

const styles = {
  // container: {
  //   padding: 15,
  //   backgroundColor: '#FFFFFF',
  // },
  cardItem: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingRight: 15,
    paddingVertical: 20,
    marginTop: 10,
  },
  // flexContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  // },
  // cardText: {
  //   fontSize: 17,
  //   color: '#514D47',
  // },
  // vertLine: {
  //   marginRight: 6,
  // },
};
