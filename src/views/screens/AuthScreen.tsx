import React, {useCallback, useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';

import {login} from '../../state/ducks/user';

import {
	ShowHideButton,
	styles as ShowHideButtonStyles,
} from '../components/ShowHideButton';

interface AuthScreenProps {
	navigation: any;
}

export default ({navigation}: AuthScreenProps) => {
	const dispatch = useDispatch();

	const [newName, setNewName] = useState('');
	const onChangeText = useCallback((text) => setNewName(text), []);
	const handlePress = useCallback(() => {
		if (newName === '') {
			return;
		}

		dispatch(login(newName));
		navigation.navigate('ColumnList');
	}, [dispatch, newName, navigation]);

	return (
		<View style={styles.wrap}>
			<TextInput
				style={styles.textInput}
				placeholder="Username"
				onChangeText={onChangeText}
			/>
			<TextInput style={styles.textInput} placeholder="Email" />
			<TextInput style={styles.textInput} placeholder="Password" />
			<ShowHideButton
				text={'Sign in'}
				onPress={handlePress}
				styles={ShowHideButtonStyles}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	wrap: {
		padding: 15,
	},
	textInput: {
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#E5E5E5',
		borderRadius: 10,
		marginTop: 10,
		padding: 15,
	},
});
