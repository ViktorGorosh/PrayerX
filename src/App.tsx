import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  AuthScreen,
  CardItemScreen,
  ColumnListScreen,
  ColumnItemScreen,
} from './views/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name={'Auth'} component={AuthScreen} />
        <Stack.Screen name={'ColumnList'} component={ColumnListScreen} />
        <Stack.Screen name={'ColumnItem'} component={ColumnItemScreen} />
        <Stack.Screen name={'CardItem'} component={CardItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
