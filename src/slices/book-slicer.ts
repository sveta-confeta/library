import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


import {
    BookType,
    CategoriesType,
    CommentsPost,
    CurrentBookType, HistoriesPost,
    imageBook,
    libraryApi
} from '../api/library-api';
import {setError, setIsFetching, setShowNavbar} from "./app-slice";




export const booksAndCategoryThunk=createAsyncThunk('books/booksAndCategoryThunk', async (param,thunkAPI) => {
    thunkAPI.dispatch(setIsFetching(true))
    const res = await libraryApi.getCategories()
    const res2 = await libraryApi.getBooks()
    try {
        return Promise.all([res.data,res2.data])

    } catch (error: any) {
        thunkAPI.dispatch(setError(true));
    } finally {
        thunkAPI.dispatch(setIsFetching(false)),
            thunkAPI.dispatch(setShowNavbar(true))
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

    book: {
        id: 0 ,
        title: '',
        rating:0,
        issueYear: '',
        description: '',
        publish: '',
        pages: '',
        cover: '',
        weight: '',
        format: '',
        ISBN: '',
        producer: '',
        authors:[],
        images: [],
        categories: [],
        comments:[],
        booking: {
            id: 0,
            order: false,
            dateOrder:'',
            customerId: 0,
            customerFirstName: '',
            customerLastName: '',

        },
        delivery: {
            id:0,
            handed: false,
            dateHandedFrom: '',
            dateHandedTo: '',
            recipientId: 0,
            recipientFirstName:'',
            recipientLastName: '',
        },

        histories:[]
    } as CurrentBookType,
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

        builder.addCase(booksAndCategoryThunk.fulfilled, (state, action) => {
            state.category = action.payload![0];
            state.books = action.payload![1];

        });

    }
})


export const bookSlider = slice.reducer;

