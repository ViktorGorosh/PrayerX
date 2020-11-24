export interface Card {
  colId: string;
  id: string;
  title: string;
  description: string | null;
  author: string;
}

export interface CardChanges {
  id: Card['id'];
  title?: Card['title'];
  description?: Card['description'];
}
