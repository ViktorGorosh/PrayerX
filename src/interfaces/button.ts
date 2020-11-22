export interface Button {
	text: string,
	// TODO: find type for style
	styles: {
		button: object,
		text: object
	}
	onPress: () => void
}
