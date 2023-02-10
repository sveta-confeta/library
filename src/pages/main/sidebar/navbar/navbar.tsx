import React from 'react'

import {genresOfBooks} from '../../../../assets/mocks';
import {CustomLink} from '../../../../utils/custom-link/custom-link'

import s from '../sidebar.module.css';

type NavbarType={
    showNavbar:boolean
    handlerMenu:()=>void
    mobVersion:boolean
}

export const Navbar = (props:NavbarType) => (
        <nav className={props.showNavbar ?  s.activeShowNavbar  : s.navbar}>

            {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
            <div  role="button"  onKeyPress={props.handlerMenu}
                  onClick={props.handlerMenu} className={`${s.navListItem} ${s.navListTitle} `}><CustomLink data-test-id={props.mobVersion? 'burger-books':'navigation-books'} to="/books/all">Все книги</CustomLink></div>

            <ul className={s.navList}>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
                { genresOfBooks.map( m => <li role="button" onKeyPress={props.handlerMenu} onClick={props.handlerMenu} key={m.id} className={s.navListItem}> <CustomLink to={`/books/${m.param}`}>{m.genre}</CustomLink> <span>{m.count}</span></li>)
                }
            </ul>
        </nav>
    );

