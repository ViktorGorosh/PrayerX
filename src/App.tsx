import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  AuthScreen,
  CardItemScreen,
  ColumnListScreen,
  ColumnItemScreen,
  AddColumnScreen,
} from './views/screens';

import {RootStackParamList} from './interfaces/navigator'

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            paddingRight: 20,
          },
        }}>
        <Stack.Screen name={'Auth'} component={AuthScreen} />
        <Stack.Screen name={'ColumnList'} component={ColumnListScreen} />
        <Stack.Screen
          name={'ColumnItem'}
          component={ColumnItemScreen}
          initialParams={{}}
          options={({route}) => ({
            title: route.params.column.title,
          })}
        />
        <Stack.Screen
          name={'CardItem'}
          component={CardItemScreen}
          options={({route}) => ({
            title: route.params.card.title,
            headerStyle: {
              backgroundColor: '#BFB393',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'left',
          })}
        />
        <Stack.Screen name={'AddColumn'} component={AddColumnScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
