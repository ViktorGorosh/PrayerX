import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import generalStyles from './styles'

export default ({route}: any) => {

  const {card, colTitle} = route.params

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CardItem</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   padding: 15,
  //   backgroundColor: '#FFFFFF',
  // },
  subtitle: {
    color: '#72A8BC',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  // vertLine: {
  //   marginRight: 6,
  // },
})
