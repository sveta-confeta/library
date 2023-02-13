import {createSlice, PayloadAction} from '@reduxjs/toolkit';

 export type StatusType='init' | 'error' | 'success' | 'loader'

const initialState={
    menuActive:false ,
    status:'init' as StatusType,
    error:null as null |string,
}

export const slice=createSlice({
    name:'app',
    initialState,
    reducers:{
        setMenuActive(state,action:PayloadAction<boolean>){
            // eslint-disable-next-line no-param-reassign
            state.menuActive=action.payload
        },
        setStatus(state,action:PayloadAction<StatusType>){
            // eslint-disable-next-line no-param-reassign
            state.status=action.payload
        },
        setError(state,action:PayloadAction<null | string>){
            // eslint-disable-next-line no-param-reassign
            state.error=action.payload
        }
    }

})

export const appSlice=slice.reducer;
export const {setMenuActive,setStatus} = slice.actions;
