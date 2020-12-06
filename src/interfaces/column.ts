import {User} from "./user";

export interface Column {
  id: number;
  title: string;
  userId: User['id']
}
