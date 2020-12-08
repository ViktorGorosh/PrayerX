import React, {useCallback} from 'react';
import {Text, View, ScrollView, Image, StyleSheet, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectColumnById} from '../../state/ducks/column';
import {addCard, selectColumnCards} from '../../state/ducks/card';
import {CustomTextInput} from '../components/CustomTextInput';
import {Card, CardAddInfo} from '../../interfaces/card';
import {Column} from '../../interfaces/column';
import {ColumnItemScreenProps} from '../../interfaces/navigator';
import {Store} from '../../interfaces/store';
import generalStyles from './styles';
import {IconButton} from '../components/IconButton';
import {selectError, selectLoading} from '../../state/ducks/meta';

export default ({route, navigation}: ColumnItemScreenProps) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: column.title,
    });
  }, [navigation]);

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const column: Column = useSelector((state: Store) =>
    selectColumnById(state, route.params.colId),
  )!;

  const cards: Array<Card> = useSelector((state: Store) =>
    selectColumnCards(state, column.id),
  );

  const handleCardAdding = useCallback(
    (title) => {
      const cardInfo: CardAddInfo = {
        checked: false,
        column: {
          id: column.id,
        },
        description: '',
        title,
      };
      console.log('clicked');
      dispatch(addCard(cardInfo));
    },
    [column.id, dispatch],
  );

  return (
    <ScrollView style={generalStyles.container}>
      <CustomTextInput placeholder={'Add card...'} onPress={handleCardAdding} />
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
      {isLoading ? (
        <Text style={generalStyles.mainText}>Загрузка...</Text>
      ) : null}
      {error ? <Text style={generalStyles.mainText}>{error}</Text> : null}
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
