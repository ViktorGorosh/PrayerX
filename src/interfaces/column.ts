import {User} from "./user";

export interface Column {
  id: number;
  title: string;
  userId: User['id'];
}

export interface ColumnWithDesc extends Column {
  description: string
}

export interface ColumnForPost {
  title: Column['title'],
  description: ColumnWithDesc['description'],
}

export interface PostColumnResponseData {
  description: ColumnWithDesc['description'];
  id: Column['id'];
  title: Column['title'];
  user: User['id'];
}
