import {Outlet} from 'react-router-dom'

import {Footer} from '../../common/footer/footer';
import {Header} from '../../common/header/header';



export const Layout = () => (
    <>
        <Header/>

        <Outlet/>

        <Footer/>
    </>

);
