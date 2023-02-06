import React from 'react';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';

import {BookPage} from './pages/book';
import {Contract} from './pages/main/contract/contract';
import {Layout} from './pages/main/layout';
import {LayoutMainPage} from './pages/main/layout-main-page';
import {MainContent} from './pages/main/main-content/main-content';
import {Terms} from './pages/main/terms-of-use/terms-of-use';

import './app.css';

export function App() {
    return (
        <div className="app">
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route element={<LayoutMainPage/>}>
                            <Route path='/' element={<Navigate to='/books/all' replace={true}/>}/>
                            <Route path='books/:category' element={<MainContent/>}/>
                            <Route path='terms' element={<Terms/>}/>
                            <Route path='contract' element={<Contract/>}/>
                            <Route path='profile' element={<Contract/>}/>
                        </Route>
                        <Route path='/books/:category/:id' element={<BookPage/>}/>
                    </Route>
                </Routes>

            </HashRouter>

        </div>
    )
}
