import { useEffect, useRef, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import arrowBottom from '../../../assets/stroke-bottom.svg'
import arrowTop from '../../../assets/stroke-top.svg'
import {useAppDispatch, useAppSelector} from '../../../redux/redux-store';
import {setMenuActive, setShowNavbar} from '../../../slices/app-slice';

import {Navbar} from './navbar/navbar';

import s from './sidebar.module.css';

export const Sidebar = () => {
    const dispatch = useAppDispatch()

    const menuRef = useRef<HTMLInputElement | null>(null)
    const activeMenu = useAppSelector<boolean>(state => state.app.menuActive);
    const showNavbar=useAppSelector<boolean>(state => state.app.showNavbar);

    const location = useLocation();




    function findUrl(str: string, p: string) {
        return str.includes(p)
    }

    const currentState = findUrl(location.pathname, 'books');
    const showNavbarHandler = () => {
        dispatch(setShowNavbar(!showNavbar))
    }

    const handlerMenuOutside = (event:MouseEvent | TouchEvent) => {
        if(!menuRef.current || !menuRef.current?.contains (event.target as Node)){
            dispatch(setMenuActive(false));
        }

    };



    useEffect(()=>{

        document.addEventListener('mousedown', handlerMenuOutside)

         return ()=>document.removeEventListener('mousedown', handlerMenuOutside)
    })




        return (
            <div  ref={menuRef} className={`${s.menu} ${activeMenu ? s.activeMenu : ''}`} >
                <div className={s.wrapperMenu}>
                    <div  className={s.wrap}  ><NavLink  to='/books/all'

                                                     className={currentState ? s.active : s.menuTitle}>
                        Витрина книг </NavLink >
                        {
                            currentState ? <button type="button" className={s.btnArrow}
                                                   onClick={showNavbarHandler}><img
                                alt=" иконка стрелки открывающая подменю"
                                src={showNavbar ? arrowTop : arrowBottom}/></button> : ''
                        }
                    </div>

                    <Navbar  showNavbar={showNavbar} />

                    <NavLink data-test-id='burger-terms' to='/terms'
                             className={({isActive}) => isActive ? s.activeDocument : s.document}>Правила
                        пользования</NavLink>
                    <NavLink data-test-id='burger-contract' to='/contract'
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





