import { useEffect, useRef, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import arrowBottom from '../../../assets/stroke-bottom.svg'
import arrowTop from '../../../assets/stroke-top.svg'
import {setMenuActive} from '../../../reducers/app-reduser';
import {useAppDispatch, useAppSelector} from '../../../redux/redux-store';

import {Navbar} from './navbar/navbar';

import s from './sidebar.module.css';

export const Sidebar = () => {
    const dispatch = useAppDispatch()

    const menuRef = useRef<HTMLInputElement | null>(null)
    const activeMenu = useAppSelector<boolean>(state => state.app.menuActive);
    const [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();

    function findUrl(str: string, p: string) {
        return str.includes(p)
    }

    const currentState = findUrl(location.pathname, 'books');
    const showNavbarHandler = () => {
        setShowNavbar(!showNavbar)
    }

    const handlerMenu = () => {
            dispatch(setMenuActive(!activeMenu));
    };


    useEffect(() => {
        if (menuRef.current) {
            menuRef.current.focus();
        }},[] )


        return (
            <div ref={menuRef} tabIndex={-1}
                onBlur={handlerMenu}
                 className={`${s.menu} ${activeMenu ? s.activeMenu : ''}`}>
                <div className={s.wrapperMenu}>
                    <div className={s.wrap}><NavLink to='/books/all'
                                                     className={currentState ? s.active : s.menuTitle}>
                        Витрина книг </NavLink>
                        {
                            currentState ? <button type="button" className={s.btnArrow}
                                                   onClick={showNavbarHandler}><img
                                alt=" иконка стрелки открывающая подменю"
                                src={showNavbar ? arrowTop : arrowBottom}/></button> : ''
                        }
                    </div>

                    <Navbar showNavbar={showNavbar}/>

                    <NavLink to='/terms'
                             className={({isActive}) => isActive ? s.activeDocument : s.document}>Правила
                        пользования</NavLink>
                    <NavLink to='/contract'
                             className={({isActive}) => isActive ? s.activeDocument : s.document}> Договор
                        оферты</NavLink>
                </div>
                <div className={s.wrapperAddMob}>
                    <NavLink to='/profile'
                             className={({isActive}) => isActive ? s.activeDocument : s.document}>Профиль</NavLink>

                    <button className={s.document} type="button">Выход</button>
                </div>
            </div>
        )
    }





