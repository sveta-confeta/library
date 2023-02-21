import {createSlice, PayloadAction} from '@reduxjs/toolkit';

 export type StatusType='init' | 'error' | 'success' | 'loader'

const initialState={
    menuActive:false ,
    status:'init' as StatusType,
    error:false,
    isFetching:false,
    showNavbar:false,
    filter:'all',
    counterBooks: 10,
}

export const slice=createSlice({
    name:'app',
    initialState,
    reducers:{
        setCounterBooks(state,action:PayloadAction<number>){
            state.counterBooks=action.payload
        },
        setFilter(state,action:PayloadAction<string>){
            state.filter=action.payload
        },
        setShowNavbar(state,action:PayloadAction<boolean>){
            state.showNavbar=action.payload
        },

        setMenuActive(state,action:PayloadAction<boolean>){
            state.menuActive=action.payload
        },
        setStatus(state,action:PayloadAction<StatusType>){
            state.status=action.payload
        },
        setError(state,action:PayloadAction<boolean>){
            state.error=action.payload
        },
        setIsFetching(state,action:PayloadAction<boolean>){
            state.isFetching=action.payload
        }
    }

})

export const appSlice=slice.reducer;
export const {setMenuActive,setStatus,setIsFetching,setError,setShowNavbar,setFilter,setCounterBooks} = slice.actions;
