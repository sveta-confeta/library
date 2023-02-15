import React from 'react';

import icon from '../../../../assets/book-page/readerIcon.png'
import {Raiting} from '../../../../common/raiting/raiting';


import s from './review.module.css';
import {CurrentBookType} from "../../../../api/library-api";
import {useAppSelector} from "../../../../redux/redux-store";

export type ReviewType = {
    firstName:string
    lastName:string
    data: string
    raiting: number
    text: string
}

export const Review = (props: ReviewType) => {
    return(
        <li>
            <div className={s.readerWrapper}>
                <img src={icon} alt='Иконка читателя'/>
                <div className={s.reader}>{`${props.firstName}
                ${props.lastName}`}</div>
                <div className={s.data}>{props.data}</div>
            </div>
           {props.raiting ?
                <Raiting value={props.raiting}/> : <Raiting value={0}/>}
            <p className={s.reviewText}>{props.text}</p>
        </li>

    );
}
