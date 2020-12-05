import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useDispatch} from 'react-redux';

import {updateComment, deleteComment} from '@ducks/comment';
import {RightAction} from '@components/RightAction';
import {Comment} from '@interfaces/comment';
import generalStyles from '@screens/styles';

interface CommentItemProps {
  comment: Comment;
}

export default ({comment}: CommentItemProps) => {
  // const [text, setText] = useState(comment.text);

  const dispatch = useDispatch();

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
    dispatch(deleteComment(comment.id));
  }, [comment.id, dispatch]);

  return (
    <Swipeable
      key={comment.id}
      renderRightActions={() => <RightAction onPress={onCommentDelete} />}>
      <View style={styles.commentItem}>
        <Image source={require('../../../img/avatar.png')} />
        <View style={styles.textWrap}>
          <Text style={styles.author}>{comment.author}</Text>
          <Text style={generalStyles.mainText}>{comment.text}</Text>
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
});
