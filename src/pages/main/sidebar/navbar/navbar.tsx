import React, {useEffect} from 'react'

import {CustomLink} from '../../../../utils/custom-link/custom-link'

import s from '../sidebar.module.css';
import {useAppDispatch, useAppSelector} from "../../../../redux/redux-store";


type NavbarType={
    showNavbar:boolean
    handlerMenu:()=>void
    mobVersion:boolean
}

export const Navbar = (props:NavbarType) => {
    const genresOfBooks=useAppSelector(state=>state.book.category)
    const dispatch=useAppDispatch();
    // useEffect(()=>{
    //     dispatch(bookCategoryThunk())
    //
    // },[])
    return(
        <nav className={props.showNavbar ?  s.activeShowNavbar  : s.navbar}>


            <div  role="button"  onKeyPress={props.handlerMenu}
                  onClick={props.handlerMenu} className={`${s.navListItem} ${s.navListTitle} `}><CustomLink data-test-id={props.mobVersion? 'burger-books':'navigation-books'} to="/books/all">Все книги</CustomLink></div>

            <ul className={s.navList}>
                {
                    genresOfBooks.map( m => <li role="button" onKeyPress={props.handlerMenu} onClick={props.handlerMenu} key={m.id} className={s.navListItem}> <CustomLink to={`/books/${m.path}`}>{m.name}</CustomLink> </li>)
                }
            </ul>
        </nav>
    );}

