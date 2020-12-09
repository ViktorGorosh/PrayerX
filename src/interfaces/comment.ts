import {Card} from './card';

export interface Comment {
  body: string;
  created: string;
  id: number;
  cardId: Card['id'];
  author: string;
}

export interface CommentAddInfo {
  body: Comment['body'];
  created: Comment['created'];
}

export interface CommentUpdateInfo {
  id: Comment['id'];
  body?: Comment['body'];
  created?: Comment['created'];
}

export interface AddCommentResponseData {
  body: Comment['body'];
  created: Comment['created'];
  id: Comment['id'];
  cardId: Comment['cardId'];
  author: Comment['author'];
}

export interface DeleteCommentResponseData {
  raw: [];
}
