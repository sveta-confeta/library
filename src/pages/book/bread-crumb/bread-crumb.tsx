import React from 'react';

 import s from './bread-crumb.module.css'

import {CurrentBookType} from "../../../api/library-api";
import {useNavigate} from "react-router-dom";


 type BreadCrumbType={

     book:CurrentBookType
     from:string
 }

export const BreadCrumb = (props:BreadCrumbType) =>{
     const navigate=useNavigate()

const goBack=()=> navigate(-1)

     return (

         <div className={s.breadcrumbContainer}>
             <nav className={s.breadcrumb}>
                 <div onClick={goBack}>{(props.from==="/books/all") ? 'Все книги' : props.book.categories[0]}&nbsp;/</div>
                 <div> &nbsp; {props.book.title}</div>
             </nav>
         </div>
     );
}

