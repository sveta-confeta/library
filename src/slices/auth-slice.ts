import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {setError, setIsFetching} from "./app-slice";

import {InitRegType} from "../pages/registration/registration";
import {authApi} from "../api/auth-api";

export const RegistrThunk = createAsyncThunk('auth/RegistrThunk', async (data: InitRegType, thunkAPI) => {
    thunkAPI.dispatch(setIsFetching(true))
    const res = await authApi.registrUser(data)
    try {
        return res.data;
    } catch (error: any) {
        thunkAPI.dispatch(setError(true));
    } finally {
        thunkAPI.dispatch(setIsFetching(false))
    }

})

// export const slice=createSlice({
//     name:'auth',
//     initialState,
//     reducers: {}
//
// })

// export const appSlice=slice.reducer;
// export const {} = slice.actions;
