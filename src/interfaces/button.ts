import {StyleProp, TextStyle} from "react-native";

export interface ButtonProps {
	text: string,
	styles: {
		button: StyleProp<any>,
		text: TextStyle
	}
	onPress: () => void
}
