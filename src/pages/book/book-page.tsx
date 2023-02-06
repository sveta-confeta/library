

import React from 'react';

import imgBook from '../../assets/book-page/imageBook.png'
import {Button} from '../../common/button/button';
import {Raiting} from '../../common/raiting/raiting';

import {BreadCrumb} from './bread-crumb/bread-crumb';
import {Reviews} from './reviews/reviews';
import {Table} from './table/table';

import s from './book-page.module.css'

export const BookPage = () =>


    (
        <React.Fragment>
        <BreadCrumb/>
        <section className={s.bookPage}>
            <div className={s.bookPageContainer}>
                <div className={s.bookWrapper}>
                    <img className={s.imgBook} src={imgBook} alt='обложка выбранной книги'/>
                    <div className={s.bookContent}>
                        <h2 className={s.titleBook}>Грокаем алгоритмы. Иллюстрированное пособие для
                            программистов и любопытствующих</h2>
                        <h3 className={s.author}>Адитья Бхаргава, 2019</h3>
                            <Button name="Забронировать" className={s.btnBook}/>
                        <h4 className={s.aboutTitle}>O книге</h4>
                        <p className={`${s.about} ${s.firstP}`}>Алгоритмы — это всего лишь пошаговые алгоритмы
                            решения задач, и большинство таких задач уже были кем-то решены,
                            протестированы и проверены. Можно, конечно, погрузится в глубокую
                            философию гениального Кнута, изучить многостраничные фолианты с
                            доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                            время?</p>

                           <h4 className={`${s.about} ${s.secondP}`}> Откройте великолепно иллюстрированную книгу и вы сразу поймете, что
                            алгоритмы — это просто. А грокать алгоритмы — это веселое и
                            увлекательное занятие.</h4>
                    </div>
                </div>
                <div className={s.raitingSection}>
                    <h4 className={s.titleSection}>Рейтинг</h4>
                    <div className={s.mobHidden}> <Raiting value={4}/></div>
                    <div className={s.mobShow}><Raiting height='34' width='34' value={0}  className={s.bookRaiting}/> <span>4.3</span></div>
                </div>
                <div className={s.infoSection}>
                    <h4 className={s.titleSection}>Подробная информация</h4>
                   <Table/>
                </div>
                <div className={s.reviewsSection}>
                    <h4 className={`${s.titleSection} ${s.reviews}`}>Отзывы <span >2</span></h4>
                    <Reviews/>

                </div>
                <Button className={s.btnStyle} name='оценить книгу'/>

            </div>
        </section>
        </React.Fragment>
    )



