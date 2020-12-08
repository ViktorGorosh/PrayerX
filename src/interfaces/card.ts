import {Column} from './column';
import {Comment} from './comment';

export interface Card {
  columnId: Column['id'];
  id: number;
  title: string;
  description: string;
  checked: boolean;
  commentsIds: Comment['id'][];
}

export interface CardChanges {
  id: Card['id'];
  title?: Card['title'];
  description?: Card['description'];
}

export interface CardAddInfo {
  title: Card['title'];
  description: Card['description'];
  checked: Card['checked'];
  column: {
    id: Column['id'];
  };
}

export interface AddCardResponseData {
  id: Card['id'];
  title: Card['title'];
  description: Card['description'];
  checked: Card['checked'];
  column: {
    id: Column['id'];
  };
  columnId: Column['id'];
}

export interface DeleteCardResponseData {
  raw: [];
}
