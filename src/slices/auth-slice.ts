import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {setError, setIsFetching, StatusType} from "./app-slice";

import {InitRegType} from "../pages/registration/registration";
import {authApi} from "../api/auth-api";

export const RegistrThunk = createAsyncThunk('auth/RegistrThunk', async (data: InitRegType, thunkAPI) => {
    thunkAPI.dispatch(setIsFetching(true)) //вкл.крутилку
    debugger
    const res = await authApi.registrUser({  username: data.username,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email})
    debugger
    try {
        return res.data;
        // dispatch(registationAC true)
        debugger

    } catch (error: any) {
        thunkAPI.dispatch(setError(true));
        debugger
    } finally {
        thunkAPI.dispatch(setIsFetching(false))
    }

})

const initialState={
isRegistered:false,  //изначально не зареганы
}

export const slice=createSlice({
    name:'auth',
    initialState,
    reducers: {}

})

// export const appSlice=slice.reducer;
// export const {} = slice.actions;
