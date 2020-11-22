import React from 'react';
import {
	Text, View, Button
} from 'react-native';

interface ColumnListScreenProps {
	navigation: any,
}

export default ({navigation}: ColumnListScreenProps) => {
	return (
		<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
			<Text>ColumnList</Text>
			<Button title={'Go to column item'} onPress={() => navigation.navigate('ColumnItem')}/>
		</View>
	)
}
