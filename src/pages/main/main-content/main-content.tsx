import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

import defaultImg from '../../../assets/default-image .jpg'
import {Button} from '../../../common/button/button';
import {Raiting} from '../../../common/raiting/raiting';
import {useAppDispatch, useAppSelector} from '../../../redux/redux-store';
import {getBooks} from '../../../slices/book-slicer';
import {Settings} from '../settings/settings';

import s from './main-content.module.css'

type Images={
    url:string
}



export const MainContent = () => {
    const [btnToggleBlock, setBtnToggleBlock] = useState(true)
    const [btnToggleList, setBtnToggleList] = useState(false)
    const dispatch=useAppDispatch();
    const books=useAppSelector((state)=>state.book.books)

    useEffect(()=>{
        dispatch(getBooks())
    },[dispatch])

    function Image(images:Images[]){
            if (images.length===0) {
                return defaultImg;
            }
            if(images.length>0)
            return images[0].url;

        }


    return (
        <React.Fragment>
            <Settings btnToggleList={btnToggleList} setBtnToggleList={setBtnToggleList}
                      btnToggleBlock={btnToggleBlock} setBtnToggleBlock={setBtnToggleBlock}/>
            <main className={`${btnToggleList ? s.inlineBookList : s.booksList}`}>
                {books?.map(m => (
                    <NavLink key={m.id} to={`/books/${m.categories}/${m.id}`}>
                        <div className={btnToggleList ? s.inlineCardBook : s.cardBook}
                             data-test-id='card'
                        >
                            <img alt={m.title} src={Image(m.images)}
                                 className={btnToggleList ? s.inlineCoverBook : s.coverBook}/>
                            {m.rating !== null ?
                                <Raiting className={btnToggleList ? s.inlineRaiting : ''}
                                         value={m.rating}/> :
                                <div
                                    className={btnToggleList ? s.inlineRaitingNone : s.raitingNone}>ещё
                                    нет оценок</div>}

                            <h4 className={`${btnToggleList ? s.inlineTitleBook : s.titleBook}`}>{m.title}</h4>

                            <h5 className={btnToggleList ? s.inlineAuthor : s.author}>{m.authors}, {m.issueYear} </h5>


                        </div>
                    </NavLink>
                ))}

            </main>
        </React.Fragment>
    )
}

// {/*<Button  onClick={(e:any)=> e.preventDefault()} className={btnToggleList ? s.inlineBtn : ''} btnToggleList={btnToggleList}*/}
// {/*        name={m.bookedTill ? `Занята до ${m.bookedTill}`*/}
// {/*            : !m.isBooked ? 'Забронировать' : 'Забронирована'}*/}
// {/*/>*/}









