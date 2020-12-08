import {User} from './user';
import {Column} from './column';
import {Card} from './card';
import {Comment} from './comment';
import {Meta} from './meta';

export interface Store {
  user: User;
  columns: Column[];
  cards: Card[];
  comments: Comment[];
  meta: Meta;
}
