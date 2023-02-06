import React from 'react';

import {readers} from '../../../assets/mocks';

import {Review} from './review/review';

import s from './reviews.module.css'

export const Reviews = () => (
    <div className={s.reviewsWrapper}>
        {
            readers.map(m => (
                <ul className={s.reviews} >
                    <Review readerName={m.readerName} data={m.data} raiting={m.raiting}
                            text={m.text}/>
                </ul>
            ))
        }


    </div>
);
