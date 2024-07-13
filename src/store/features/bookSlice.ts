import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import booksJson from '../../utils/books.json';
import { IBook } from "../../models/IBook";

const initialState = {
    bookList: booksJson
}

const bookSlice = createSlice({
    name: 'book',
    initialState: initialState,
    reducers: {
        addBook: (state, action) => {
            state.bookList.push(action.payload);
        }
    },
    extraReducers: () => { }
})


export const { addBook } = bookSlice.actions
export default bookSlice.reducer