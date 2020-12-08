import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCardById} from '../../state/ducks/card';
import {selectCardComments} from '../../state/ducks/comment';
import {CommentItem} from '../components/CommentItem';
import {IconButton} from '../components/IconButton';
import {Store} from '../../interfaces/store';
import {Comment} from '../../interfaces/comment';
import {CardItemScreenProps} from '../../interfaces/navigator';
import generalStyles from './styles';

export default ({route, navigation}: CardItemScreenProps) => {
  const {colTitle, cardId} = route.params;

  // const dispatch = useDispatch()

  const card = useSelector((state: Store) => selectCardById(state, cardId))!;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: card.title,
    });
  }, [navigation]);

  const comments: Array<Comment> = useSelector((state: Store) =>
    selectCardComments(state, cardId),
  );
  // const [isActive, setActive] = useState(false)
  //
  // const onToggleActive = useCallback(() => setActive(prevState => !prevState), []);

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
        {/*<CustomTextInput />*/}
        <Text style={generalStyles.mainText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex fugiat
          molestiae quas tenetur ullam, velit.
        </Text>
      </View>
      <View style={styles.wrap}>
        <Text style={styles.subtitle}>Comments</Text>
      </View>
      <View style={styles.line} />
      {comments.map((comment) => {
        return <CommentItem key={comment.id} comment={comment} />;
      })}
      <View style={styles.addContainer}>
        <IconButton onPress={() => 1} type={'comment'} />
        <TextInput
          style={styles.commentInput}
          placeholder={'Add a comment...'}
        />
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
  },
});
