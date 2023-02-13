import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

import defaultImg from '../../../assets/default-image .jpg'
import {Button} from '../../../common/button/button';
import {Raiting} from '../../../common/raiting/raiting';
import {useAppDispatch, useAppSelector} from '../../../redux/redux-store';
import {booksThunk} from '../../../slices/book-slicer';
import {Settings} from '../settings/settings';

import s from './main-content.module.css'
import {imageBook} from "../../../api/library-api";



export const MainContent = () => {
    const [btnToggleBlock, setBtnToggleBlock] = useState(true)
    const [btnToggleList, setBtnToggleList] = useState(false)

    const books=useAppSelector((state)=>state.book.books)



    return (
        <React.Fragment>
            <Settings btnToggleList={btnToggleList} setBtnToggleList={setBtnToggleList}
                      btnToggleBlock={btnToggleBlock} setBtnToggleBlock={setBtnToggleBlock}/>
            <main className={`${btnToggleList ? s.inlineBookList : s.booksList}`}>
                {books && books.map(m =>{
                    debugger
                    return(
                        <NavLink key={m.id} to={`/books/${m.categories}/${m.id}`}>
                            <div className={btnToggleList ? s.inlineCardBook : s.cardBook}
                            >
                                <img src={m.image ? `https://strapi.cleverland.by${m.image.url}` : defaultImg}

                                     className={btnToggleList ? s.inlineCoverBook : s.coverBook}/>
                                {m.rating !== null ?
                                    <Raiting className={btnToggleList ? s.inlineRaiting : ''}
                                             value={m.rating}/> :
                                    <div
                                        className={btnToggleList ? s.inlineRaitingNone : s.raitingNone}>ещё
                                        нет оценок</div>}

                                <h4 className={`${btnToggleList ? s.inlineTitleBook : s.titleBook}`}>{m.title}</h4>

                                <h5 className={btnToggleList ? s.inlineAuthor : s.author}>{m.authors}, {m.issueYear} </h5>
                                <Button  onClick={(e:any)=> e.preventDefault()} className={btnToggleList ? s.inlineBtn : ''} btnToggleList={btnToggleList}
                                         name={m.booking ? "Забронирован" :""  ||  m.delivery ? `Занята до ${m.delivery?.dateHandedFrom}` : "" || 'Забронировать'}/>



                            </div>
                        </NavLink>
                    )
                    }





                )}

            </main>
        </React.Fragment>
    )
}











