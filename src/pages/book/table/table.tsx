import React from 'react';

import s from './table.module.css'

export const Table = () => (
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
                    <li>Питеp</li>
                    <li>2019</li>
                    <li>288</li>
                    <li>Мягкая обложка</li>
                    <li>70х100</li>
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
                    <li>370г</li>
                    <li>978-5-4461-0923-4</li>
                    <li className={s.mobShow}>16+</li>
                    <li className={s.position}>ООО «Питер Мейл». РФ, 198206, <wbr/> г.Санкт&nbsp;-&nbsp;Петербург, Петергофское&nbsp;ш,&nbsp;д.73, лит.
                        А29
                    </li>
                </ul>
            </div>
        </div>
    )
;


