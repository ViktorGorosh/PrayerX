import React, {useCallback, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from "react-redux";
import {StackScreenProps} from "@react-navigation/stack";
import {selectCardComments} from "../../state/ducks/comment";
import {CardInput} from "../components/CardInput";
import {CommentItem} from "../components/CommentItem";
import {IconButton} from "../components/IconButton";
import {Comment} from "../../interfaces/comment";
import {Card} from "../../interfaces/card";
import generalStyles from './styles'

export default ({route}: StackScreenProps<any>) => {

  // @ts-ignore
  const card: Card = route.params.card
  // @ts-ignore
  const {colTitle} = route.params

  const comments: Array<Comment> = useSelector(state => selectCardComments(state, card.id))
  const [isActive, setActive] = useState(false)

  const onToggleActive = useCallback(() => setActive(prevState => !prevState), []);

  return (
    // Flexbox problem was about this ScrollView changed on View
    <ScrollView style={styles.container}>
      <View style={styles.colTitle} >
        <Image source={require('../../img/vertical-line.png')} style={generalStyles.vertLine}/>
        <Text style={generalStyles.mainText}>In '{colTitle}' column</Text>
      </View>
      <View style={styles.wrap}>
        <Text style={styles.subtitle}>Author</Text>
        <Text style={generalStyles.mainText}>{card.author}</Text>
      </View>
      <View style={styles.wrap}>
        <Text style={styles.subtitle}>Description</Text>
        {/*TODO: rename CardInput comp into CustomTextInput*/}
        <CardInput />
        <Text style={generalStyles.mainText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex fugiat molestiae quas tenetur ullam, velit.</Text>
      </View>
      <View style={styles.wrap}>
        <Text style={styles.subtitle}>Comments</Text>
      </View>
      <View style={styles.line}/>
      {comments.map(comment => {
        return <CommentItem key={comment.id} comment={comment} />
      })}
      <View style={styles.addContainer} >
        <IconButton onPress={() => 1} type={'comment'} />
        <TextInput style={styles.commentInput} placeholder={'Add a comment...'} />
      </View>
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
  }
})
