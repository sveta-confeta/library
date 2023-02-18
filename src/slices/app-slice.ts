import {createSlice, PayloadAction} from '@reduxjs/toolkit';

 export type StatusType='init' | 'error' | 'success' | 'loader'

const initialState={
    menuActive:false ,
    status:'init' as StatusType,
    error:false,
    isFetching:false,
    showNavbar:false,
}

export const slice=createSlice({
    name:'app',
    initialState,
    reducers:{
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
export const {setMenuActive,setStatus,setIsFetching,setError,setShowNavbar} = slice.actions;
