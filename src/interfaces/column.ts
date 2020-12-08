import {User} from './user';

export interface Column {
  id: number;
  title: string;
  userId: User['id'];
}

export interface ColumnExtended extends Column {
  description: string;
}

export interface ColumnForPost {
  title: Column['title'];
  description: ColumnExtended['description'];
}

export interface ColumnUpdate {
  id: Column['id'];
  title: Column['title'];
  description: ColumnExtended['description'];
}

export interface PostColumnResponseData {
  description: ColumnExtended['description'];
  id: Column['id'];
  title: Column['title'];
  user: User['id'];
}

export interface UpdateColumnResponseData {
  id: Column['id'];
  title: Column['title'];
  userId: User['id'];
}
