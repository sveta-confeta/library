import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


import {BookType, libraryApi} from '../api/library-api';


export const booksThunk = createAsyncThunk<BookType[]>('books/booksThunk', async (param, thunkAPI) => {
    const res = await libraryApi.getBooks()
    return res.data;

})

export const bookThunk = createAsyncThunk('books/bookThunk', async (id:number, thunkAPI) => {
    const res = await libraryApi.getBook(id)
    return res.data;

})


const initialState = {
    books: [] as BookType[] | null,
    book: {}  as BookType | null
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

