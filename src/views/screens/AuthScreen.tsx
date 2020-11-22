import React, {useCallback, useState} from 'react';
import {
	View, StyleSheet, TextInput, TouchableOpacity, Text
} from 'react-native';
import {useDispatch} from 'react-redux';

import {login } from '../../state/ducks/user';

interface AuthScreenProps {
	navigation: any
}

export default ({navigation}: AuthScreenProps) => {

	const dispatch = useDispatch();

	const [newName, setNewName] = useState('')
	const onChangeText = useCallback(text => setNewName(text),[])
	const onPress = useCallback(() => {

		if (newName === '') return

		dispatch(login(newName))
		navigation.navigate('ColumnList')
	}, [dispatch, newName])

	return (
		<View style={styles.wrap}>
			<TextInput
				style={styles.textInput}
				placeholder="Username"
				onChangeText={onChangeText}
			/>
			<TextInput
				style={styles.textInput}
				placeholder="Email"
			/>
			<TextInput
				style={styles.textInput}
				placeholder="Password"
			/>
			<TouchableOpacity
				style={styles.signInBtn}
				onPress={onPress}
			>
				<Text style={styles.buttonText}>Sign in</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		padding: 15,
	},
	textInput: {
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: '#E5E5E5',
		borderRadius: 10,
		marginTop: 10,
		padding: 15
	},
	signInBtn: {
		backgroundColor: '#BFB393',
		borderRadius: 15,
		marginTop: 10,
		paddingHorizontal: 17,
		paddingVertical: 8
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 12,
		textTransform: 'uppercase',
	}
})
