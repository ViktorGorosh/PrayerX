import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {StackScreenProps} from "@react-navigation/stack";
import {useSelector} from 'react-redux';
import {selectColumnCards} from '../../state/ducks/card';
import {CustomTextInput} from "../components/CustomTextInput";
import {Card} from '../../interfaces/card';
import {Column} from "../../interfaces/column";
import generalStyles from './styles'

export default ({route, navigation}: StackScreenProps<any> ) => {

  // @ts-ignore
  const column: Column = route.params.column;

  const cards: Array<Card> = useSelector((state) =>
    selectColumnCards(state, column.id),
  );

  return (
    <ScrollView style={generalStyles.container}>
      <CustomTextInput />
      {cards.map((card) => {
        return (
            <View style={styles.cardItem} key={card.id}>
                <View style={generalStyles.flexContainer} >
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
