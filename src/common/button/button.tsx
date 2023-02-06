import React from 'react';

import s from './button.module.css'

type ButtonType = {
    name: string
    active?: boolean
    disabled?: boolean
    size?: 'small' | 'medium'
    className?: string
    btnToggleList?:boolean

}

export const Button: React.FC<ButtonType> = ({
                                                 size,
                                                 name,
                                                 active, disabled, className,btnToggleList
                                             }) => (
    <React.Fragment>
        {(() => {
            switch (name) {
                case 'Забронировать' || 'оценить книгу':
                    return <button type='submit'
                                   className={`${s.btn} ${s.orange} ${active}  ${className} ${btnToggleList ? s.inlineBtnCards: ''} `}
                                   disabled={disabled}> {name}</button>;
                case  'оценить книгу':
                    return <button type='submit'
                                   className={`${s.btn} ${s.orange} ${active}  ${className}  ${btnToggleList ? s.inlineBtnCards: ''}`}
                                   disabled={disabled}> {name}</button>;

                case 'Забронирована':
                    return <button type='submit' className={`${s.btn} ${active}  ${s.white}  ${btnToggleList ? s.inlineBtnCards: ''}`}
                                   disabled={disabled}>
                        {name}</button>;


                default:
                    return <button type='submit' className={`${s.btn} ${active}  ${s.grey}  ${btnToggleList ? s.inlineBtnCards: ''}`}
                                   disabled={disabled}>
                        {name}</button>;

            }
        })()
        }

    </React.Fragment>
);




