import {Action, createAsyncThunk, createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';

import {BookType, libraryApi} from '../api/library-api';


const initialState = {
    books: [] as BookType[]
}

export const getBooks = createAsyncThunk('books/getBooks', async (data, {
    rejectWithValue,
    dispatch
}) => {
    const res = await libraryApi.getBooks();

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    dispatch(setBooks(res.data))
})

export const slice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks(state, action: PayloadAction<BookType[]>) {
            // eslint-disable-next-line no-param-reassign
            state.books = action.payload
        },
    },
    extraReducers: {
        // [getBooks.fulfilled]: () => {
        // },
        // [getBooks.pending]: () => {
        // },
        // [getBooks.rejected]: () => {
        // },
    }


})
export const bookSlider = slice.reducer;
export const {setBooks} = slice.actions

