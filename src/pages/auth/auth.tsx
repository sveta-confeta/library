import React from 'react';
import s from "./auth.module.css"
import {NavLink} from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import {Forgot} from "../forgot/forgot";

export const Auth = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                <div className={s.logo}>Cleverland</div>
                <h2 className={s.titleRegistr}>Вход в личный кабинет</h2>
                <form>
                    <input className={`${s.input}  ${s.first}`} placeholder="Логин"
                           name=" username"
                           type="text"/>
                    <input className={`${s.input} ${s.second} `} placeholder="Пароль" type="password"
                           name=" password"/>
                    <NavLink to={'/forgot-pass'}  className={s.forgot}>Забыли логин или пароль?</NavLink>
                    <button className={s.btnRegistr} >вход
                    </button>
                </form>

                <div className={s.openWrapper}>
                    <p>Нет учётная записи?</p>
                    <NavLink className={s.openLink} to={''}><span className={s.open}>Регистрация</span>
                        <img src={arrow} alt={"стрелка"}/></NavLink>
                </div>

            </div>
        </div>
    );
};

