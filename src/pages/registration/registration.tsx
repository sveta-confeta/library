import React, {useEffect, useState} from 'react';
import s from './registration.module.css'
import {NavLink} from "react-router-dom";
import arrow from './../../assets/arrow.svg'
import {useFormik} from "formik";
type StepType="oneStep"| "twoStep" | "threeStep"

// type InitType={
//     login:string
//     password:string
//     userName:string
//     userSurname:string
//     numberTel:string
//     email:string
// }

export const Registration = () => {
    const [changeStep,setChangeStep]=useState<StepType>("oneStep")

    const stepHandlerTwo=()=>{
        setChangeStep("twoStep")
    }
    const stepHandlerThree=()=>{
        setChangeStep("threeStep")
    }


        const formik=useFormik({
        initialValues:{
            login:'',
            password:'',
            userName:'',
            userSurname:'',
            numberTel:'',
            email:'',
        },
            // validate,
        onSubmit:values => {
            alert(JSON.stringify(values)); //это для теста что все работает)
            // dispatch(loginTC(values));
            // formik.resetForm();
        },

    })
    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                <div className={s.logo}>Cleverland</div>
                <h2 className={s.titleRegistr}>Peгистрация </h2>
                {
                     (changeStep==="oneStep") &&
                    <>
                    <p className={s.step}>1 шаг из 3</p>
                    <form>
                    <input className={s.input}  placeholder="Придумайте логин для входа" name="login"
                    type="text"/>
                    <input className={s.input} placeholder="Пароль" type="password" name=" password"/>
                    <button className={s.btnRegistr} onClick={stepHandlerTwo}>следующий шаг</button>
                    </form></>
                }
                {
                    changeStep==="twoStep" &&
                    <>
                    <p className={s.step}>2 шаг из 3</p>
                    <form>
                        <input className={s.input} placeholder="Имя" name="userName"
                                             type="text"/>
                    <input className={s.input} placeholder="Фамилия" type="text" name="userSurname"/>
                    <button className={s.btnRegistr} onClick={stepHandlerThree}>последний шаг</button>
                    </form>
                    </>
                }
                {
                    changeStep==="threeStep" &&
                    <>
                        <p className={s.step}>3 шаг из 3</p>
                        <form onSubmit={formik.handleSubmit}>
                            <input className={s.input} placeholder="Номер телефона" name="numberTel"
                                                   type="number"/>
                            <input className={s.input} placeholder="E-mail" type="email" name=" password"/>
                            <button className={s.btnRegistr}>зарегистрироваться</button>
                        </form>
                    </>
                }



                <div className={s.openWrapper}>
                    <p>Есть учётная запись?</p>
                    <NavLink className={s.openLink} to={''}><span className={s.open}>войти</span> <img src={arrow} alt={"стрелка"}/></NavLink>
                </div>
            </div>
        </div>
    );
};

