import {User} from './user';
import {Card} from './card';

export interface Comment {
  body: string;
  created: string;
  id: number;
  cardId: Card['id'];
  userId: User['id'];
}

export interface CommentAddInfo {
  cardId: Card['id'];
  body: Comment['body'];
  created: Comment['created'];
}

export interface CommentUpdateInfo {
  id: Comment['id'];
  body?: Comment['body'];
  created?: Comment['created'];
}

export interface AddCommentResponseData extends Comment {
  card: Card;
  user: User;
}

export interface DeleteCommentResponseData {
  raw: [];
}
