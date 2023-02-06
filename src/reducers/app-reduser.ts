import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState={
    menuActive:false
}

const slice=createSlice({
    name:'app',
    initialState,
    reducers:{
        setMenuActive(state,action:PayloadAction<boolean>){
            // eslint-disable-next-line no-param-reassign
            state.menuActive=action.payload
        }
    }

})

export const appReducer=slice.reducer;
export const {setMenuActive} = slice.actions;
