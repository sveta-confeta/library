import React from 'react';
import {Outlet} from 'react-router-dom';

import {Sidebar} from './sidebar/sidebar';

import s from './main-page.module.css';

export const LayoutMainPage = () => (
    <section className={s.mainPage}>
        <Sidebar/>
        <Outlet/>
        </section>
);
