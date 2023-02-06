import React from 'react';

 import s from './bread-crumb.module.css'

export const BreadCrumb = () => (
        <div className={s.breadcrumbContainer}>
            <ul className={s.breadcrumb}>
                <li><a href="#">Бизнес книги&nbsp; /</a></li>
                <li><a href="#"> &nbsp; Грокаем алгоритмы. Иллюстрированное пособие для
                    программистов и
                    любопытствующих</a></li>
            </ul>
        </div>
    );

