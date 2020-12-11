import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useDispatch, useSelector} from 'react-redux';
import {AvatarIcon} from '../../../img'
import {selectCommentById} from '../../../state/ducks/comment';
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
  const [text, setText] = useState(comment.body);

  // const onCommentTextChange = useCallback((e) => setText(e.target.value), []);
  //
  // const onCommentUpdate = useCallback(() => {
  //   if (text === '') {
  //     return;
  //   }
  //
  //   dispatch(updateComment({id: comment.id, text}));
  // }, [comment.id, dispatch, text]);

  const onCommentDelete = useCallback(() => {
    // dispatch(deleteComment(comment.id));
  }, []);

  return (
    <Swipeable
      key={comment.id}
      renderRightActions={() => <RightAction onPress={onCommentDelete} />}>
      <View style={styles.commentItem}>
        <Image source={AvatarIcon} />
        <View style={styles.textWrap}>
          <Text style={styles.author}>{comment.userId}</Text>
          {comment.id !== editingComment ? (
            <Text style={generalStyles.mainText}>{comment.body}</Text>
          ) : (
            <TextInput
              style={[generalStyles.mainText, styles.textInput]}
              defaultValue={comment.body}
              autoFocus={true}
              onChangeText={(text) => setText(text)}
              // onBlur={() => {
              //   if (text === '') {
              //     return;
              //   }
              //
              //   dispatch(
              //     updateComment({
              //       id: comment.id,
              //       title: commentTitle,
              //     }),
              //   );
              //   setcommentTitle('');
              //   setEditingcomment(undefined);
              // }}
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
