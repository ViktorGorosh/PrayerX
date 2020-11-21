import React from 'react';
import {
	Text,
} from 'react-native';
import {useSelector} from "react-redux";
import {selectUser} from "./state/ducks/user";

import {User} from "interfaces/user";

export default () => {
	const user: User = useSelector(selectUser)
	return (
		<>
			<Text>Hello, {user.name}</Text>
		</>
	);
}
