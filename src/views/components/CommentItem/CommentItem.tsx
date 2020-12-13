import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectCommentById,
  deleteComment,
  updateComment,
} from '../../../state/ducks/comment';
import {RightAction} from '../RightAction';
import {Store} from '../../../store';
import {Comment} from '../../../interfaces/comment';
import generalStyles from '../../screens/styles';

interface CommentItemProps {
  commentId: Comment['id'];
}

export default ({commentId}: CommentItemProps) => {
  const dispatch = useDispatch();

  const comment = useSelector((state: Store) =>
    selectCommentById(state, commentId),
  )!;

  const [editingComment, setEditingComment] = useState<
    Comment['id'] | undefined
  >(undefined);
  const [commentText, setCommentText] = useState(comment.body);

  const onCommentEdit = useCallback(() => {
    setEditingComment(commentId);
  }, [commentId]);

  const onCommentTextChange = useCallback((text) => setCommentText(text), []);

  const onCommentUpdate = useCallback(() => {
    setEditingComment(undefined);
    setCommentText('');

    if (commentText === '') {
      return;
    }

    dispatch(
      updateComment({
        id: comment.id,
        body: commentText,
        created: new Date().toString(),
      }),
    );
  }, [comment.id, dispatch, commentText]);

  const onCommentDelete = useCallback(() => {
    dispatch(deleteComment(comment.id));
  }, []);

  return (
    <Swipeable
      key={comment.id}
      renderRightActions={() => <RightAction onPress={onCommentDelete} />}>
      <View style={styles.commentItem}>
        <Image source={require('../../../img/avatar.png')} />
        <View style={styles.textWrap}>
          <Text style={styles.author}>{comment.userId}</Text>
          {comment.id !== editingComment ? (
            <Text style={generalStyles.mainText} onLongPress={onCommentEdit}>
              {comment.body}
            </Text>
          ) : (
            <TextInput
              style={[generalStyles.mainText, styles.textInput]}
              defaultValue={comment.body}
              autoFocus={true}
              onChangeText={onCommentTextChange}
              onBlur={onCommentUpdate}
            />
          )}
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  commentItem: {
    ...generalStyles.flexContainer,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 20,
  },
  textWrap: {
    flexBasis: '85%',
  },
  author: {
    ...generalStyles.mainText,
    fontWeight: 'bold',
  },
  textInput: {
    padding: 0,
  },
});
