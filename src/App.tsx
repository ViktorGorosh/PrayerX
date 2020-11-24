import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';

import {
  AuthScreen,
  CardItemScreen,
  ColumnListScreen,
  ColumnItemScreen,
} from './views/screens';
import {Column} from "./interfaces/column";
import {Alert, Text} from "react-native";
import { IconButton } from './views/components/IconButton';

// TODO: Fix RootStackParamList error in createStackNavigator
interface RootStackParamList {
  Auth: undefined;
  ColumnList: undefined;
  ColumnItem: {
    column: Column
  };
  CardItem: undefined;
}

const Stack = createStackNavigator();
const headerOptions: StackNavigationOptions = {
  headerTitleAlign: "center",
  headerRightContainerStyle: {
    paddingRight: 20
  },
  headerRight: () => (<IconButton onPress={() => Alert.alert('pressed')}/>)
}

export default () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={'Auth'}
          component={AuthScreen}
          options={headerOptions}
        />
        <Stack.Screen
          name={'ColumnList'}
          component={ColumnListScreen}
          options={headerOptions}
        />
        <Stack.Screen
          name={'ColumnItem'}
          component={ColumnItemScreen}
          initialParams={{}}

          options={({route}) => ({
            ...headerOptions,
            // @ts-ignore
            title: route.params.column.title,
          })}
        />
        <Stack.Screen
          name={'CardItem'}
          component={CardItemScreen}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
