import React from 'react';

import {Review} from './review/review';

import s from './reviews.module.css'
import {CurrentBookType} from "../../../api/library-api";
import {useAppSelector} from "../../../redux/redux-store";

export const Reviews = () =>{
    const book:CurrentBookType = useAppSelector(state => state.book.book)
 return (

    <div className={s.reviewsWrapper}>
        {
            book.comments ?
            book.comments.map(m => (
                <ul key={m.id} className={s.reviews} >
                    <Review firstName={m.user.firstName} lastName={m.user.lastName} data={m.createdAt} raiting={m.raiting}
                            text={m.text}/>
                </ul>
            ))
                : <p className={s.worn}> Oтзывов еще нет.</p>
        }


    </div>
)}
