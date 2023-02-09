import React from 'react'

import {genresOfBooks} from '../../../../assets/mocks';
import {CustomLink} from '../../../../utils/custom-link/custom-link'

import s from '../sidebar.module.css';

type NavbarType={
    showNavbar:boolean
    handlerMenu:()=>void
}

export const Navbar = (props:NavbarType) => (
        <nav className={props.showNavbar ?  s.activeShowNavbar  : s.navbar}>
            <ul className={s.navList}>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
                { genresOfBooks.map( m => <li role="button" onKeyPress={props.handlerMenu} onClick={props.handlerMenu} key={m.id} className={s.navListItem}> <CustomLink to={`/books/${m.param}`}>{m.genre}</CustomLink> <span>{m.count}</span></li>)
                }
            </ul>
        </nav>
    );

