import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

import defaultImg from '../../../assets/default-image .jpg'
import {Button} from '../../../common/button/button';
import {Raiting} from '../../../common/raiting/raiting';
import {useAppSelector} from '../../../redux/redux-store';

import {Settings} from '../settings/settings';

import s from './main-content.module.css'
import {Preloader} from "../../../utils/Preloader";
import {Error} from "../../../utils/error/error";




export const MainContent = () => {
    const location = useLocation();


    const [btnToggleBlock, setBtnToggleBlock] = useState(true)
    const [btnToggleList, setBtnToggleList] = useState(false)


    const books=useAppSelector((state)=>state.book.books)
    const isFetching=useAppSelector(state=> state.app.isFetching)
    const errorFlag=useAppSelector(state=>state.app.error)
    const categories=useAppSelector(state =>state.book.category)
    const filter=useAppSelector(state => state.app.filter)

    function findUrl(str: string, p: string) {
        return str.includes(p)   //функция ищет совпадения фрагмента в строке
    }

    const allPage = findUrl(location.pathname, 'all') //вместо строки вставляем url и ещем в url фрагмент "all" -если находит то тру

    let booksFilter=  allPage ? books : books.filter((m) => filter===m.categories[0]) //фильтрация books




    return (
        <React.Fragment>
            {errorFlag && <Error/>}
            <Settings btnToggleList={btnToggleList} setBtnToggleList={setBtnToggleList}
                      btnToggleBlock={btnToggleBlock} setBtnToggleBlock={setBtnToggleBlock}/>
            {isFetching && <Preloader/> }
                <main className={`${btnToggleList ? s.inlineBookList : s.booksList}`}>
                    { booksFilter.map(m =>{

                        return(
                                <Link key={m.id} to={`/books/${categories.find(f=> f.name === m.categories[0])?.path}/${m.id}`} state = {{ from:location }} >
                                    <div className={btnToggleList ? s.inlineCardBook : s.cardBook}
                                    >
                                        <img src={m.image ? `https://strapi.cleverland.by${m.image.url}` : defaultImg}

                                             className={btnToggleList ? s.inlineCoverBook : s.coverBook}/>
                                        {m.rating ?
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
                                </Link>
                            )
                        }
                    )}

                </main>


        </React.Fragment>
    )
}











