import React from 'react';
import {
	Text, View
} from 'react-native';

interface CardItemScreenProps {
	navigation: any,
}

export default ({}: CardItemScreenProps) => {
	return (
		<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
			<Text>CardItem</Text>
		</View>
	)
}
