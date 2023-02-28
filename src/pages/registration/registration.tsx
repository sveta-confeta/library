import React from 'react';
import s from './registration.module.css'
import {NavLink} from "react-router-dom";
import arrow from './../../assets/arrow.svg'


export const Registration = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                <div className={s.logo}>Cleverland</div>
                <h2 className={s.titleRegistr}>Peгистрация </h2>
                <p className={s.step}>1 шаг из 3</p>
                <form>
                    <input className={s.input} placeholder="Придумайте логин для входа"
                           type="text"/>
                    <input className={s.input} placeholder="Пароль" type="password"/>
                     <button className={s.btnRegistr}>следующий шаг</button>
                </form>
                <div className={s.openWrapper}>
                    <p>Есть учётная запись?</p>
                    <NavLink className={s.openLink} to={''}><span className={s.open}>войти</span> <img src={arrow} alt={"стрелка"}/></NavLink>

                </div>
            </div>
        </div>
    );
};
s
