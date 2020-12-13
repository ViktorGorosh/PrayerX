import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectCardById, updateCard} from '../../state/ducks/card';
import {addComment, selectCardComments} from '../../state/ducks/comment';
import {CommentItem} from '../components/CommentItem';
import {IconButton} from '../components/IconButton';
import {CustomTextInput} from '../components/CustomTextInput';
import {Store} from '../../store';
import {Comment} from '../../interfaces/comment';
import {CardItemScreenProps} from '../../interfaces/navigator';
import generalStyles from './styles';
import {selectError, selectLoading} from '../../state/ducks/meta';

export default ({route, navigation}: CardItemScreenProps) => {
  const {colTitle, cardId} = route.params;

  const card = useSelector((state: Store) => selectCardById(state, cardId))!;

  useEffect(() => {
    navigation.setOptions({
      title: card.title,
    });
  }, [card.title, navigation]);

  const dispatch = useDispatch();

  const comments: Array<Comment> = useSelector((state: Store) =>
    selectCardComments(state, cardId),
  );
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const [newComment, setNewComment] = useState('');
  const [isEditingDesc, setEditingDesc] = useState(false);
  const [newDesc, setNewDesc] = useState(card.description);

  const onChangeNewComment = useCallback((text) => {
    setNewComment(text);
  }, []);

  const handleCommentAdd = useCallback(() => {
    if (newComment === '') {
      return;
    }

    dispatch(
      addComment({cardId, body: newComment, created: new Date().toString()}),
    );
  }, [cardId, dispatch, newComment]);

  const handleCardUpdate = useCallback(() => {
    dispatch(updateCard({id: cardId, description: newDesc}));
    setEditingDesc(false);
  }, [cardId, dispatch, newDesc]);

  const handleDescriptionAdd = useCallback(
    (description) => {
      if (description === '') {
        return;
      }

      dispatch(updateCard({id: cardId, description}));
    },
    [cardId, dispatch],
  );

  const onDescriptionEdit = useCallback(() => setEditingDesc(true), []);

  const onChangeNewDesc = useCallback((text) => {
    setNewDesc(text);
  }, []);

  return (
    // Flexbox problem was about this ScrollView changed on View
    // TODO: change ScrollView to Flatlist with Separator comp
    <ScrollView style={styles.container}>
      <View style={styles.colTitle}>
        <Image
          source={require('../../img/vertical-line.png')}
          style={generalStyles.vertLine}
        />
        <Text style={generalStyles.mainText}>In '{colTitle}' column</Text>
      </View>
      <View style={styles.wrap}>
        <Text style={styles.subtitle}>Author</Text>
        <Text style={generalStyles.mainText}>Author</Text>
      </View>
      <View style={styles.wrap}>
        <Text style={styles.subtitle}>Description</Text>
        {card.description ? (
          isEditingDesc ? (
            <TextInput
              style={[generalStyles.mainText, styles.descInput]}
              defaultValue={card.description}
              autoFocus={true}
              onChangeText={onChangeNewDesc}
              onBlur={handleCardUpdate}
            />
          ) : (
            <Text
              style={generalStyles.mainText}
              onLongPress={onDescriptionEdit}>
              {card.description}
            </Text>
          )
        ) : (
          <CustomTextInput
            onPress={handleDescriptionAdd}
            placeholder={'Add description...'}
          />
        )}
      </View>
      <View style={styles.wrap}>
        <Text style={styles.subtitle}>Comments</Text>
      </View>
      <View style={styles.line} />
      {comments.map((comment) => {
        return <CommentItem key={comment.id} commentId={comment.id} />;
      })}
      <View style={styles.addContainer}>
        <IconButton onPress={handleCommentAdd} type={'comment'} />
        <TextInput
          style={styles.commentInput}
          placeholder={'Add a comment...'}
          onChangeText={onChangeNewComment}
        />
      </View>
      {isLoading ? (
        <Text style={generalStyles.mainText}>Загрузка...</Text>
      ) : null}
      {error ? <Text style={generalStyles.mainText}>{error}</Text> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  subtitle: {
    color: '#72A8BC',
    fontSize: 13,
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  colTitle: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
  },
  wrap: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#E5E5E5',
  },
  addContainer: {
    ...generalStyles.flexContainer,
    alignItems: 'center',
    padding: 17,
  },
  commentInput: {
    fontSize: 17,
    color: '#9C9C9C',
    paddingRight: 17,
    marginLeft: 7,
  },
  descInput: {
    padding: 0,
  },
});
