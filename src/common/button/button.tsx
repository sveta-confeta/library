import React from 'react';

import s from './button.module.css'

type ButtonType = {
    name: string
    active?: boolean
    disabled?: boolean
    className?: string
    btnToggleList?:boolean
    onClick?:(e:any)=>void

}

export const Button: React.FC<ButtonType> = ({
                                               onClick,
                                                 name,
                                                 active, disabled, className,btnToggleList
                                             }) => (
    <React.Fragment>
        {(() => {
            switch (name) {
                case 'Забронировать' || 'оценить книгу':
                    return <button type='button' onClick={onClick}
                                   className={`${s.btn} ${s.orange} ${active}  ${className} ${btnToggleList ? s.inlineBtnCards: ''} `}
                                   disabled={disabled}> {name}</button>;
                case  'оценить книгу':
                    return <button type='button' onClick={onClick}
                                   className={`${s.btn} ${s.orange} ${active}  ${className}  ${btnToggleList ? s.inlineBtnCards: ''}`}
                                   disabled={disabled}> {name}</button>;

                case 'Забронирована':
                    return <button type='button' onClick={onClick} className={`${s.btn} ${active}  ${s.white}  ${btnToggleList ? s.inlineBtnCards: ''}`}
                                   disabled={disabled}>
                        {name}</button>;


                default:
                    return <button onClick={onClick} type='button' className={`${s.btn} ${active}  ${s.grey}  ${btnToggleList ? s.inlineBtnCards: ''}`}
                                   disabled={disabled}>
                        {name}</button>;

            }
        })()
        }

    </React.Fragment>
);




