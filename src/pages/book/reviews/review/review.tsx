import React from 'react';

import icon from '../../../../assets/book-page/readerIcon.png'
import {Raiting, RaitingValueType} from '../../../../common/raiting/raiting';


import s from './review.module.css';

export type ReviewType = {
    readerName: string
    data: string
    raiting: RaitingValueType
    text: string
}

export const Review = (props: ReviewType) => (
    <li>
        <div className={s.readerWrapper}>
            <img src={icon} alt='Иконка читателя'/>
            <div className={s.reader}>{props.readerName}</div>
            <div className={s.data}>{props.data}</div>
        </div>
        <Raiting value={props.raiting}/>
        <p className={s.reviewText}>{props.text}</p>
    </li>

);

