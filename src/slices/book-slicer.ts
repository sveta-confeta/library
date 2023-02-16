import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


import {BookType, CategoriesType, CurrentBookType, libraryApi} from '../api/library-api';
import {setError, setIsFetching} from "./app-slice";


// export const booksThunk = createAsyncThunk('books/booksThunk', async (param, thunkAPI) => {
//     thunkAPI.dispatch(setIsFetching(true))
//     const res = await libraryApi.getBooks()
//     try {
//         return res.data;
//     } catch (error: any) {
//         thunkAPI.dispatch(setError(true));
//     } finally {
//         thunkAPI.dispatch(setIsFetching(false))
//     }
//
// })



// export const bookCategoryThunk = createAsyncThunk('books/bookCategoryThunk', async (param,thunkAPI) => {
//     thunkAPI.dispatch(setIsFetching(true))
//     const res = await libraryApi.getCategories()
//     try {
//         return res.data;
//     } catch (error: any) {
//         thunkAPI.dispatch(setError(true));
//     } finally {
//         thunkAPI.dispatch(setIsFetching(false))
//     }
//
// })

export const booksAndCategoryThunk=createAsyncThunk('books/booksAndCategoryThunk', async (param,thunkAPI) => {
    thunkAPI.dispatch(setIsFetching(true))
    const res = await libraryApi.getCategories()
    const res2 = await libraryApi.getBooks()
    try {
        return Promise.all([res.data,res2.data])
    } catch (error: any) {
        thunkAPI.dispatch(setError(true));
    } finally {
        thunkAPI.dispatch(setIsFetching(false))
    }

})
export const bookThunk = createAsyncThunk('books/bookThunk', async (id: number, thunkAPI) => {
    thunkAPI.dispatch(setIsFetching(true))
    const res = await libraryApi.getBook(id)
    try {
        return res.data;
    } catch (error: any) {
        thunkAPI.dispatch(setError(true));
    } finally {
        thunkAPI.dispatch(setIsFetching(false))
    }

})




const initialState = {

    book: {} as CurrentBookType,
    books: [] as BookType[],
    category:[] as CategoriesType[],


}


export const slice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(bookThunk.fulfilled, (state, action) => {
            state.book = action.payload!;

        });
        // builder.addCase(booksThunk.fulfilled, (state, action) => {
        //     state.books = action.payload!;
        // });
        //
        // builder.addCase(bookCategoryThunk.fulfilled, (state, action) => {
        //     state.category = action.payload!;
        //
        // });
        builder.addCase(booksAndCategoryThunk.fulfilled, (state, action) => {
            state.category = action.payload![0];
            debugger
            state.books = action.payload![1];
            debugger

        });

    }
})


export const bookSlider = slice.reducer;

