import {createSlice} from "@reduxjs/toolkit";
import {Column} from "interfaces/column";
import {ChangeTitleAction} from "./types";

const initialState: Array<Column> = [
	{id: '4cc2beae-3d4f-4363-a22a-12a6cebf37b9', title: 'TO DO'},
	{id: '1cf46274-7cda-41b4-bbe8-9e89e1a5ee8c', title: 'In progress'},
	{id: '8bc2d6be-d0d6-463a-8eca-1e2bdd23f81f', title: 'Testing'},
	{id: '6872c5a7-634b-4744-bfea-59295eee0066', title: 'Done'},
]

export const column = createSlice({
	name: 'column',
	initialState,
	reducers: {
		changeTitle: (state, action: ChangeTitleAction) => {
			return state.map((column) => {

				if (column.id === action.payload.id) {
					return {...column, title: action.payload.newTitle}
				}

				return column
			})
		}
	}
})

export default column.reducer
