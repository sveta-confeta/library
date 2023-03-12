import React, { useState} from 'react';
import s from './registration.module.css'
import {NavLink} from "react-router-dom";
import arrow from './../../assets/arrow.svg'
import {useFormik} from "formik";

import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/redux-store";
import {RegistrThunk} from "../../slices/auth-slice";

type StepType = "oneStep" | "twoStep" | "threeStep"

export type InitRegType={
    username: string
    password: string
    firstName: string
    lastName: string
    phone: string
    email: string
}

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
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

    const validate = (values:InitRegType) => {
        const errors: FormikErrorType= {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length <=3) {
            errors.password = 'symbol of password should > 3';
        }

        return errors;
    };

    const formik = useFormik({

        initialValues: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        },
         validate,
        onSubmit: values => {
            // alert(JSON.stringify(values)); //это для теста что все работает)
            dispatch(RegistrThunk(values));
            debugger
            // formik.resetForm();
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
                        <form onSubmit={formik.handleSubmit}>
                            <input className={s.input} placeholder="Придумайте логин для входа"
                                   {...formik.getFieldProps('username')}
                                   type="text"/>
                            <input className={s.input} placeholder="Пароль" type="password"
                                   {...formik.getFieldProps('password')}/>
                            <button type="button" className={s.btnRegistr} onClick={stepHandlerTwo}>следующий
                                шаг
                            </button>
                        </form>
                    </>
                }
                {
                    changeStep === "twoStep" &&
                    <>
                        <p className={s.step}>2 шаг из 3</p>
                        <form onSubmit={formik.handleSubmit}>
                            <input className={s.input} placeholder="Имя" {...formik.getFieldProps('firstName')}
                                   type="text"/>
                            <input className={s.input} placeholder="Фамилия" type="text" {...formik.getFieldProps('lastName')}/>
                            <button type="button" className={s.btnRegistr} onClick={stepHandlerThree}>последний
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
                            <input  className={s.input} placeholder="Номер телефона"  {...formik.getFieldProps('phone')}
                                   type="text"/>
                            <input className={s.input} placeholder="E-mail" type="email"
                                   {...formik.getFieldProps('email')}/>
                            <button type='submit' className={s.btnRegistr}>зарегистрироваться</button>
                        </form>
                    </>
                }


                <div className={s.openWrapper}>
                    <p>Есть учётная запись?</p>
                    <NavLink className={s.openLink} to={'/auth'}><span className={s.open}>войти</span>
                        <img src={arrow} alt={"стрелка"}/></NavLink>
                </div>
            </div>
        </div>
    );
};

