import React, { useState} from 'react';
import s from './registration.module.css'
import {NavLink} from "react-router-dom";
import arrow from './../../assets/arrow.svg'
import {useFormik} from "formik";
import {RegistrThunk} from "../../slices/auth-slice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/redux-store";

type StepType = "oneStep" | "twoStep" | "threeStep"

export type InitRegType={
    username: string
    password: string
    firstName: string
    lastName: string
    phone: string
    email: string
}

export const Registration = () => {
    const [changeStep, setChangeStep] = useState<StepType>("oneStep")
    const dispatch=useDispatch<AppDispatch>();

    const stepHandlerTwo = () => {
        setChangeStep("twoStep")
    }
    const stepHandlerThree = () => {
        setChangeStep("threeStep")
    }


    const formik = useFormik({

        initialValues: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        },
        // validate,
        onSubmit: values => {
            alert(JSON.stringify(values)); //это для теста что все работает)
            dispatch(RegistrThunk(values));
            formik.resetForm();
        },

    })
    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                <div className={s.logo}>Cleverland</div>
                <h2 className={s.titleRegistr}>Peгистрация </h2>
                {
                    (changeStep === "oneStep") &&
                    <>
                        <p className={s.step}>1 шаг из 3</p>
                        <form>
                            <input className={s.input} placeholder="Придумайте логин для входа"
                                   name=" username"
                                   type="text"/>
                            <input className={s.input} placeholder="Пароль" type="password"
                                   name=" password"/>
                            <button className={s.btnRegistr} onClick={stepHandlerTwo}>следующий
                                шаг
                            </button>
                        </form>
                    </>
                }
                {
                    changeStep === "twoStep" &&
                    <>
                        <p className={s.step}>2 шаг из 3</p>
                        <form>
                            <input className={s.input} placeholder="Имя" name="firstName"
                                   type="text"/>
                            <input className={s.input} placeholder="Фамилия" type="text"
                                   name="lastName"/>
                            <button className={s.btnRegistr} onClick={stepHandlerThree}>последний
                                шаг
                            </button>
                        </form>
                    </>
                }
                {
                    changeStep === "threeStep" &&
                    <>
                        <p className={s.step}>3 шаг из 3</p>
                        <form onSubmit={formik.handleSubmit}>
                            <input className={s.input} placeholder="Номер телефона" name="phone"
                                   type="number"/>
                            <input className={s.input} placeholder="E-mail" type="email"
                                   name="email"/>
                            <button className={s.btnRegistr}>зарегистрироваться</button>
                        </form>
                    </>
                }


                <div className={s.openWrapper}>
                    <p>Есть учётная запись?</p>
                    <NavLink className={s.openLink} to={''}><span className={s.open}>войти</span>
                        <img src={arrow} alt={"стрелка"}/></NavLink>
                </div>
            </div>
        </div>
    );
};

