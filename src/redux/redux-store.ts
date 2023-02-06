import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit';

import {appReducer} from '../reducers/app-reduser';


const rootReducer = combineReducers({
    app:appReducer,

})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(
                thunk
            )

});
export type AppRootType = typeof rootReducer;
export type AppRootStateType = ReturnType<AppRootType>
export type AppDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>;

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector // внутри типизация стейта всего приложения

export const useAppDispatch = () => useDispatch<AppDispatch>()


