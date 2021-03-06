import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useDispatch, useSelector} from 'react-redux';
import {selectColumnById} from '../../state/ducks/column';
import {
  addCard,
  deleteCard,
  selectColumnCards,
  updateCard,
} from '../../state/ducks/card';
import {getComments, selectCardComments} from '../../state/ducks/comment';
import {selectError, selectLoading} from '../../state/ducks/meta';
import {CustomTextInput} from '../components/CustomTextInput';
import {RightAction} from '../components/RightAction';
import {Store} from '../../store';
import {ColumnItemScreenProps} from '../../interfaces/navigator';
import {Card, CardAddInfo} from '../../interfaces/card';
import generalStyles from './styles';

export default ({route, navigation}: ColumnItemScreenProps) => {
  const dispatch = useDispatch();

  const column = useSelector((state: Store) =>
    selectColumnById(state, route.params.colId),
  )!;

  useEffect(() => {
    navigation.setOptions({
      title: column.title,
    });
    dispatch(getComments());
  }, [column.title, dispatch, navigation]);

  const [editingCard, setEditingCard] = useState<Card['id'] | undefined>(
    undefined,
  );
  const [cardTitle, setCardTitle] = useState('');
  const error = useSelector(selectError);

  const isLoading = useSelector(selectLoading);

  const cards = useSelector((state: Store) =>
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
        const comments = useSelector((state: Store) =>
          selectCardComments(state, card.id),
        );

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
                  {card.id !== editingCard ? (
                    <Text
                      style={generalStyles.mainText}
                      onPress={() =>
                        navigation.navigate('CardItem', {
                          cardId: card.id,
                          colTitle: column.title,
                        })
                      }
                      onLongPress={() => setEditingCard(card.id)}>
                      {card.title}
                    </Text>
                  ) : (
                    <TextInput
                      style={[generalStyles.mainText, styles.textInput]}
                      defaultValue={card.title}
                      autoFocus={true}
                      onChangeText={(text) => setCardTitle(text)}
                      onBlur={() => {
                        setCardTitle('');
                        setEditingCard(undefined);

                        if (cardTitle === '') {
                          return;
                        }
                        dispatch(
                          updateCard({
                            id: card.id,
                            title: cardTitle,
                          }),
                        );
                      }}
                    />
                  )}
                  <Image
                    source={require('../../img/user.png')}
                    style={styles.userIcon}
                  />
                  <Text style={generalStyles.mainText}>{comments.length}</Text>
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
  textInput: {
    padding: 0,
  },
  userIcon: {
    marginLeft: 'auto',
    marginRight: 5,
  },
});
