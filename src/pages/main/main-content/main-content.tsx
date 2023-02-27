import React, {useEffect, useState} from 'react';
import {Link, useLocation, useSearchParams} from 'react-router-dom';

import defaultImg from '../../../assets/default-image .jpg'
import {Button} from '../../../common/button/button';
import {Raiting} from '../../../common/raiting/raiting';
import {useAppDispatch, useAppSelector} from '../../../redux/redux-store';

import {Settings} from '../settings/settings';

import s from './main-content.module.css'
import {Preloader} from "../../../utils/Preloader";
import {Error} from "../../../utils/error/error";
import {booksThunk} from "../../../slices/book-slicer";


export const MainContent = () => {
    const dispatch = useAppDispatch();

    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    const booksQuery = searchParams.get('book') || ''


    const [btnToggleBlock, setBtnToggleBlock] = useState(true)
    const [btnToggleList, setBtnToggleList] = useState(false)

    const [changeRating, setChangeRating] = useState(true)


    const books = useAppSelector((state) => state.book.books)
    const isFetching = useAppSelector(state => state.app.isFetching)
    const errorFlag = useAppSelector(state => state.app.error)
    const categories = useAppSelector(state => state.book.category)
    const filter = useAppSelector(state => state.app.filter)

    function findUrl(str: string, p: string) {
        return str.includes(p)   //функция ищет совпадения фрагмента в строке
    }

    const allPage = findUrl(location.pathname, 'all') //вместо строки вставляем url и ещем в url фрагмент "all" -если находит то тру


    let booksFilter = allPage ? books : books.filter((m) => filter === m.categories[0]) //фильтрация books

    // @ts-ignore
    const ratingBooksDown = [...booksFilter].sort((a, b) => b.rating - a.rating); //сортировка по рейтингу (от большего к меньшему)
    // @ts-ignore
    const changeRaitingUp = [...booksFilter].sort((a, b) => a.rating - b.rating); //сортировка по рейтингу (от меньшего  к большему)

    let searchBooks = (changeRating ? ratingBooksDown : changeRaitingUp).filter(book => book.title.toLowerCase().includes(booksQuery))

    useEffect(() => {
        dispatch(booksThunk())
        console.log('ffff')
    },[])

    const highlightTextSearch = (text: string, textSearch: string) => { //функция подсветки текста

        if (textSearch) {
            const regexp = new RegExp(textSearch || '', 'ig')
            const search = text.match(regexp)


            return search ? text.split(regexp).map((s, index, array) => {
                    if (index < array.length - 1) {
                        const c = search.shift()
                        return <span key={Math.random()}>{s}<span
                            style={{color: 'rgb(255, 82, 83)'}}>{c}</span></span>
                    }
                    return s
                })
                : text
        }

        return text
    }


    return (
        <React.Fragment>
            {errorFlag && <Error/>}
            <Settings btnToggleList={btnToggleList} setBtnToggleList={setBtnToggleList}

                      btnToggleBlock={btnToggleBlock} setBtnToggleBlock={setBtnToggleBlock}
                      booksQuery={booksQuery}
                      setSearchParams={setSearchParams} searchParams={searchParams}
                      changeRating={changeRating} setChangeRating={setChangeRating}/>
            {isFetching && <Preloader/>}
            <main className={`${btnToggleList ? s.inlineBookList : s.booksList}`}>
                {searchBooks.length !== 0
                    ? searchBooks.map(m => {

                            return (
                                <Link key={m.id}
                                      to={`/books/${categories.find(f => f.name === m.categories[0])?.path}/${m.id}`}
                                      state={{from: location}}>
                                    <div className={btnToggleList ? s.inlineCardBook : s.cardBook}
                                    >
                                        <img
                                            src={m.image ? `https://strapi.cleverland.by${m.image.url}` : defaultImg}

                                            className={btnToggleList ? s.inlineCoverBook : s.coverBook}/>
                                        {m.rating ?
                                            <Raiting className={btnToggleList ? s.inlineRaiting : ''}
                                                     value={m.rating}/> :
                                            <div
                                                className={btnToggleList ? s.inlineRaitingNone : s.raitingNone}>ещё
                                                нет оценок</div>}

                                        <h4 className={`${btnToggleList ? s.inlineTitleBook : s.titleBook}`}>{highlightTextSearch(m.title, booksQuery)}</h4>

                                        <h5 className={btnToggleList ? s.inlineAuthor : s.author}>{m.authors}, {m.issueYear} </h5>
                                        <Button onClick={(e: any) => e.preventDefault()}
                                                className={btnToggleList ? s.inlineBtn : ''}
                                                btnToggleList={btnToggleList}
                                                name={m.booking ? "Забронирован" : "" || m.delivery ? `Занята до ${m.delivery?.dateHandedFrom}` : "" || 'Забронировать'}/>


                                    </div>
                                </Link>
                            )
                        }
                    ) : <div className={s.textToNever}>По запросу ничего не найдено</div>
                }

            </main>


        </React.Fragment>
    )

}











