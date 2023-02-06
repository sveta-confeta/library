import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import {books} from '../../../assets/mocks';
import {Button} from '../../../common/button/button';
import {Raiting} from '../../../common/raiting/raiting';
import {Settings} from '../settings/settings';

import s from './main-content.module.css'

export const MainContent = () => {
    const [btnToggleBlock, setBtnToggleBlock] = useState(true)
    const [btnToggleList, setBtnToggleList] = useState(false)

    return (
        <React.Fragment>
            <Settings btnToggleList={btnToggleList} setBtnToggleList={setBtnToggleList}
                      btnToggleBlock={btnToggleBlock} setBtnToggleBlock={setBtnToggleBlock}/>
            <main className={`${btnToggleList ? s.inlineBookList : s.booksList}`}>
                {books.map(m => (
                    <NavLink key={m.id} to={`/books/${m.category}/${m.id}`}>
                        <div className={btnToggleList ? s.inlineCardBook : s.cardBook}
                             data-test-id='card'
                        >
                            <img alt={m.title} src={m.image}
                                 className={btnToggleList ? s.inlineCoverBook : s.coverBook}/>
                            {m.rating !== 0 ?
                                <Raiting className={btnToggleList ? s.inlineRaiting : ''}
                                         value={m.rating}/> :
                                <div
                                    className={btnToggleList ? s.inlineRaitingNone : s.raitingNone}>ещё
                                    нет оценок</div>}

                            <h4 className={`${btnToggleList ? s.inlineTitleBook : s.titleBook}`}>{m.title}</h4>

                            <h5 className={btnToggleList ? s.inlineAuthor : s.author}>{m.author}, {m.year} </h5>
                            <Button  className={btnToggleList ? s.inlineBtn : ''} btnToggleList={btnToggleList}
                                    name={m.bookedTill ? `Занята до ${m.bookedTill}`
                                        : !m.isBooked ? 'Забронировать' : 'Забронирована'}
                            />

                        </div>
                    </NavLink>
                ))}

            </main>
        </React.Fragment>
    )
}











