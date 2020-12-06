import {User} from "./user";
import {Column} from "./column";
import {Card} from "./card";
import {Comment} from "./comment";
import {Errors} from "./errors";

export interface Store {
  user: User;
  columns: Column[];
  cards: Card[];
  comments: Comment[];
  errors: Errors;
}
