import React from 'react';
import {
	Text, View, Button
} from 'react-native';

interface ColumnItemScreenProps {
	navigation: any,
}

export default ({navigation}: ColumnItemScreenProps) => {
	return (
		<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
			<Text>ColumnItem</Text>
			<Button title={'Go to card item'} onPress={() => navigation.navigate('CardItem')}/>
		</View>
	)
}
