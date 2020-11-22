import React from 'react';
import {
	Text, View, Button
} from 'react-native';

interface AuthScreenProps {
	navigation: any
}

export default ({navigation}: AuthScreenProps) => {
	return (
		<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
			<Text>Please, log in</Text>
			<Button title={'Go to column list'} onPress={() => navigation.navigate('ColumnList')}/>
		</View>
	)
}
