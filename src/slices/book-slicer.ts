import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


import {BookType, CurrentBookType, libraryApi} from '../api/library-api';
import {setIsFetching} from "./app-slice";


export const booksThunk = createAsyncThunk<BookType[]>('books/booksThunk', async (param, thunkAPI) => {
    thunkAPI.dispatch(setIsFetching(true))
    const res = await libraryApi.getBooks()

    try {
        return res.data;
    }
finally {
        thunkAPI.dispatch(setIsFetching(false))
    }

})

export const bookThunk = createAsyncThunk('books/bookThunk', async (id: number, thunkAPI) => {
    thunkAPI.dispatch(setIsFetching(true))
    const res = await libraryApi.getBook(id)
    try {
        return res.data;
    }
    finally {
        thunkAPI.dispatch(setIsFetching(false))
    }

})


const initialState = {
    books: [] as BookType[] | null,
    book: {} as CurrentBookType

}


export const slice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(booksThunk.fulfilled, (state, action) => {

            state.books = action.payload;
        });
        builder.addCase(bookThunk.fulfilled, (state, action) => {
            state.book = action.payload;

        });

    }
})


export const bookSlider = slice.reducer;

