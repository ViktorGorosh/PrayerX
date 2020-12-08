import {Card} from './card';

export interface Comment {
  id: number;
  cardId: Card['id'];
  author: string;
  text: string;
}
