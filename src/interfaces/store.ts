import {User} from "./user";
import {Column} from "./column";
import {Card} from "./card";
import {Comment} from "./comment";

export interface Store {
  user: User;
  columns: Column[];
  cards: Card[];
  comments: Comment[];
}
