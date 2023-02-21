import React, {useEffect} from 'react'

import {CustomLink} from '../../../../utils/custom-link/custom-link'

import s from '../sidebar.module.css';
import {useAppDispatch, useAppSelector} from "../../../../redux/redux-store";
import {setFilter} from "../../../../slices/app-slice";


type NavbarType={
    showNavbar:boolean
}

export const Navbar = (props:NavbarType) => {
    const genresOfBooks=useAppSelector(state=>state.book.category)
    const books=useAppSelector((state)=>state.book.books)
    // const counterBooks=useAppSelector(state=> state.app.counterBooks)

    debugger


    const dispatch=useAppDispatch();

    const handlerMenu=(name:string)=>{
     dispatch(setFilter(name))
    }
    return(
        <nav className={props.showNavbar ?  s.activeShowNavbar  : s.navbar}>


            <button
                name="all"
                  onClick={()=>handlerMenu('all')}
                className={`${s.navListItem} ${s.navListTitle} `}><CustomLink  to="/books/all">Все книги</CustomLink></button>

            <div className={s.navList}>
                {
                    genresOfBooks.map( m => <button name={m.name}  onClick={()=>handlerMenu(m.name)} key={m.id} className={s.navListItem}> <CustomLink to={`/books/${m.path}`}>{m.name}</CustomLink><span>{counterBooks}</span> </button>)
                }
            </div>
        </nav>
    );}

