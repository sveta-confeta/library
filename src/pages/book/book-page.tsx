import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {BottomIcon} from '../../assets/icon-components/bottom-icon';
import {TopIcon} from '../../assets/icon-components/top-icon';
import {Button} from '../../common/button/button';
import {Raiting} from '../../common/raiting/raiting';

import BookSlider from './book-slider/book-slider';
import {BreadCrumb} from './bread-crumb/bread-crumb';
import {Reviews} from './reviews/reviews';
import {Table} from './table/table';

import s from './book-page.module.css'
import defaultImg from '../../assets/default-image .jpg'
import {bookThunk} from "../../slices/book-slicer";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {CurrentBookType} from "../../api/library-api";
import {Preloader} from "../../utils/Preloader";
import {Error} from "../../utils/error/error";



export const BookPage = () => {
    const location = useLocation();
    const {id} = useParams();
    const [openReviews, setOpenReviews] = useState(false)
    const dispatch = useAppDispatch();
    const book:CurrentBookType = useAppSelector(state => state.book.book)
    const isFetching=useAppSelector(state=> state.app.isFetching)
    const errorFlag=useAppSelector(state=>state.app.error)

    const from=location.state?.from?.pathname //достаем из стейта путь, по которому мы пришли

    useEffect(() => {
            dispatch(bookThunk(Number(id)))
    }, [id])




    return (
        <React.Fragment>
            <BreadCrumb book={book} from={from} />
            {errorFlag && <Error/>}
            {isFetching && <Preloader/> }
            <section className={s.bookPage}>
                <div className={s.bookPageContainer}>
                    <div className={s.bookWrapper}>
                        <div className={s.imgBook}>
                            {book && book.images && book.images.length ===  0 ?
                                <img className={s.aloneImg} alt="обложка книги" src={defaultImg}/>
                                : book.images.length === 1 ?
                                     <img className={s.aloneImg} alt="обложка книги"
                                         src={`https://strapi.cleverland.by${book.images[0].url}`}/> :

                                    <BookSlider arrImgs={book.images}/>  }

                                </div>


                        <div className={s.bookContent}>
                            <h2 className={s.titleBook}>{book.title}</h2>
                            <h3 className={s.author}>{`${book.authors}, ${book.issueYear} `}</h3>
                            <Button name="Забронировать" className={s.btnBook}/>
                            <h4 className={s.aboutTitle}>O книге</h4>
                            <p className={`${s.about} ${s.firstP}`}>{book.description}</p>
                        </div>
                    </div>
                    <div className={s.raitingSection}>
                        <h4 className={s.titleSection}>Рейтинг</h4>
                      <div className={s.mobHidden}>{book.rating ?
                       <Raiting value={book.rating}/> : <Raiting value={0}/> }


                    {/*    /!*<div className={s.mobShow}><Raiting height='34' width='34' value={0}*!/*/}
                    {/*    /!*                                    className={s.bookRaiting}/>*!/*/}
                           <span>{!book.rating ? "" : book.rating}</span></div>
                    </div>

                    <div className={s.infoSection}>
                       <h4 className={s.titleSection}>Подробная информация</h4>
                         {/*@ts-ignore*/}
                        <Table/>
                    </div>


                    <div className={s.reviewsSection}>
                        <h4 className={`${s.titleSection} ${s.reviews}`}>Отзывы <span>2</span>
                            <button
                                    onClick={() => setOpenReviews(!openReviews)}
                                    className={s.btnReviews} type="button">
                                {openReviews ? <BottomIcon fill='#363636'/> :
                                    <TopIcon fill='#363636'/>}
                            </button>
                        </h4>
                        {openReviews
                            ?
                            <Reviews/>
                            : ''}

                    </div>
                    <Button  className={s.btnStyle}
                            name='оценить книгу'/>

                </div>
            </section>
        </React.Fragment>
    )


}
