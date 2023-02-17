import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';

import {Sidebar} from './sidebar/sidebar';

import s from './main-page.module.css';
import {booksAndCategoryThunk} from "../../slices/book-slicer";
import {useAppDispatch} from "../../redux/redux-store";



export const LayoutMainPage = () => {
    const dispatch=useAppDispatch();
    useEffect(()=>{
        // dispatch(booksThunk())
        dispatch(booksAndCategoryThunk())

    },[dispatch])
    return (
        <section className={s.mainPage}>
            <Sidebar/>
            <Outlet/>
        </section>

    )
}


