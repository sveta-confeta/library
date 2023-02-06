import React  from 'react';
import {useNavigate} from 'react-router-dom';

import avatar from '../../assets/avatar.jpg'
import logo from '../../assets/logo.png'
import {setMenuActive} from '../../reducers/app-reduser';
import {useAppDispatch, useAppSelector} from '../../redux/redux-store';

import s from './header.module.css'


export const Header = () => {
    const dispatch=useAppDispatch();
    const activeMenu=useAppSelector<boolean>(state=> state.app.menuActive);

    const handlerMenu=()=>{
        dispatch(setMenuActive(!activeMenu))
    }
    const navigate = useNavigate()


    const clickHandler = () => {
        navigate('/')
    }


    return (
        <header className={s.header}>
            <button className={s.menuIconWrapper} type="button" onClick={handlerMenu}>
                <div className={`${s.menuIcon} ${activeMenu ? s.active : ''}`} />
            </button>
            <button className={s.btn} type="button" onClick={clickHandler}><img src={logo}
                                                                                className={s.logo}
                                                                                alt="Логотип библиотеки"/>
            </button>


            <h1 className={s.title}>Библиотека</h1>
            <div className={s.avatarWrapper}>
                <p className={s.greeting}>Привет, <span className={s.name}>Иван</span> !</p>
                <img src={avatar} width={58} height={58} className={s.avatar}
                     alt="аватарка пользователя"/>
            </div>

        </header>
    );
};



