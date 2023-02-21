import React from 'react';

 import s from './bread-crumb.module.css'
import {useParams} from "react-router-dom";
import {CurrentBookType} from "../../../api/library-api";

 type BreadCrumbType={
     book:CurrentBookType
 }

export const BreadCrumb = (props:BreadCrumbType) =>{
    const {category}=useParams();


     return (
         <div className={s.breadcrumbContainer}>
             <ul className={s.breadcrumb}>
                 <li ><a href="#">Все книги&nbsp; /</a></li>
                 <li aria-current="page"><a href="#"> &nbsp; {props.book.title}</a></li>
             </ul>
         </div>
     );
}

