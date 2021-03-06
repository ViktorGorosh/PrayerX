import {StackScreenProps} from '@react-navigation/stack';
import {Column} from './column';
import {Card} from './card';

export type RootStackParamList = {
  Auth: undefined;
  ColumnList: undefined;
  AddColumn: undefined;
  ColumnItem: {
    colId: Column['id'];
  };
  CardItem: {
    colTitle: Column['title'];
    cardId: Card['id'];
  };
};

export type AuthScreenProps = StackScreenProps<RootStackParamList, 'Auth'>;
export type AddColumnScreenProps = StackScreenProps<
  RootStackParamList,
  'AddColumn'
>;
export type ColumnListScreenProps = StackScreenProps<
  RootStackParamList,
  'ColumnList'
>;
export type ColumnItemScreenProps = StackScreenProps<
  RootStackParamList,
  'ColumnItem'
>;
export type CardItemScreenProps = StackScreenProps<
  RootStackParamList,
  'CardItem'
>;
