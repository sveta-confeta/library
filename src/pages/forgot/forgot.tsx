import React from 'react';
import s from "./forgot.module.css"
import {NavLink} from "react-router-dom";
import arrow from "../../assets/arrow.svg";

export const Forgot = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                <div className={s.logo}>Cleverland</div>
                <h2 className={s.titleRegistr}>Восстановление пароля</h2>
                <form>

                    <input className={`${s.input} ${s.second} `} placeholder="Email" type="email"
                           name=" email"/>
                    <p className={s.forgot}>На это email  будет отправлено письмо с инструкциями пo восстановлению пароля</p>
                    <button className={s.btnRegistr} >восстановить
                    </button>
                </form>

                <div className={s.openWrapper}>
                    <p>Нет учётная записи?</p>
                    <NavLink className={s.openLink} to={'/'}><span className={s.open}>Регистрация</span>
                        <img src={arrow} alt={"стрелка"}/></NavLink>
                </div>

            </div>
        </div>
    );
};

