import {Comment} from "interfaces/comment";

export interface AddCommentAction {
	type: string,
	payload: {
		cardId: Comment['cardId'],
		author: Comment['author'],
		text: Comment['text'],
	}
}

export interface DeleteCommentAction {
	type: string,
	payload: Comment['id']
}

export interface UpdateCommentAction {
	type: string,
	payload: {
		id: Comment['id']
		text: Comment['text']
	}
}
