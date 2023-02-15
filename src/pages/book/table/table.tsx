import React from 'react';

import s from './table.module.css'
import {CurrentBookType} from "../../../api/library-api";
import {useAppSelector} from "../../../redux/redux-store";


export const Table = () =>{
    const book: CurrentBookType = useAppSelector(state => state.book.book)

    return(
        book ?
        <div className={s.tablesBook}>
            <div className={s.tableOne}>
                <ul>
                    <li>Издательство</li>
                    <li>Год издания</li>
                    <li>Страниц</li>
                    <li>Переплет</li>
                    <li>Формат</li>
                </ul>
                <ul>
                    <li>{book.publish}</li>
                    <li>{book.issueYear}</li>
                    <li>{book.pages}</li>
                    <li>{book.cover}</li>
                    <li>{book.format}</li>
                </ul>
            </div>
            <div className={s.tableTwo}>
                <ul>
                    <li className={s.mobHidden}>Жанр</li>
                    <li>Вес</li>
                    <li>ISBN</li>
                    <li className={s.mobShow}>Возрастные ограничения</li>
                    <li>Изготовитель</li>
                </ul>
                <ul>
                    <li className={s.mobHidden}>Компьютерная литература</li>
                    <li>{book.weight}г</li>
                    <li>{book.ISBN}</li>
                    <li className={s.mobShow}>16+</li>
                    <li className={s.position}>{book.producer}
                    </li>
                </ul>
            </div>
        </div> :""
    )
    ;
}


