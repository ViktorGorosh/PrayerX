import React, {useCallback} from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useDispatch, useSelector} from 'react-redux';
import {selectColumnById} from '../../state/ducks/column';
import {addCard, deleteCard, selectColumnCards} from '../../state/ducks/card';
import {selectError, selectLoading} from '../../state/ducks/meta';
import {CustomTextInput} from '../components/CustomTextInput';
import {RightAction} from '../components/RightAction';
import {Store} from '../../interfaces/store';
import {ColumnItemScreenProps} from '../../interfaces/navigator';
import {Card, CardAddInfo} from '../../interfaces/card';
import {Column} from '../../interfaces/column';
import generalStyles from './styles';

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
      dispatch(addCard(cardInfo));
    },
    [column.id, dispatch],
  );

  const handleCardDelete = useCallback(
    (id: Card['id']) => {
      dispatch(deleteCard(id));
    },
    [dispatch],
  );

  return (
    <ScrollView style={generalStyles.container}>
      <CustomTextInput placeholder={'Add card...'} onPress={handleCardAdding} />
      {cards.map((card) => {
        return (
          <View style={styles.cardItemWrap} key={card.id}>
            <Swipeable
              renderRightActions={() => (
                <RightAction onPress={() => handleCardDelete(card.id)} />
              )}>
              <View style={styles.cardItem}>
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
            </Swipeable>
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
  cardItemWrap: {
    marginTop: 10,
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingRight: 15,
    paddingVertical: 20,
  },
});
