import React from 'react';
import {Link, PathPattern, useMatch} from 'react-router-dom';
import s from './custom-link.module.css'


interface NavLinkProps  {
    children?: any
    to: string
}
export const CustomLink=({children,to,...props}: NavLinkProps)=>{

    const match=useMatch(to);

    return(
        <Link to={to}
              className={match ? s.orange : ''}
              {...props}>
            {children}
        </Link>
    )
}
