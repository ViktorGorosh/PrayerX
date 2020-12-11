import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import {AsyncStorage} from 'react-native';

axios.defaults.baseURL = 'http://trello-purrweb.herokuapp.com';

axios.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

import {
  AddColumnScreen,
  AuthScreen,
  CardItemScreen,
  ColumnItemScreen,
  ColumnListScreen,
} from './views/screens';

import {RootStackParamList} from './interfaces/navigator';

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
        <Stack.Screen
          name={'ColumnList'}
          component={ColumnListScreen}
          options={{title: 'My Desk'}}
        />
        <Stack.Screen
          name={'ColumnItem'}
          component={ColumnItemScreen}
          initialParams={{}}
        />
        <Stack.Screen
          name={'CardItem'}
          component={CardItemScreen}
          options={{
            headerStyle: {
              backgroundColor: '#BFB393',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'left',
          }}
        />
        <Stack.Screen name={'AddColumn'} component={AddColumnScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
