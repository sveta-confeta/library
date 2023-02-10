import React, {Dispatch, SetStateAction, useState} from 'react';

import {BlockIcon} from '../../../assets/icon-components/block-icon';
import {ListIcon} from '../../../assets/icon-components/list-icon';
import IconRait from '../../../assets/icon-rait.svg'
import IconSearch from '../../../assets/icon-search.svg'

import s from './settings.module.css'

type SettingsType = {
    btnToggleList: boolean
    setBtnToggleList: Dispatch<SetStateAction<boolean>>
    btnToggleBlock: boolean
    setBtnToggleBlock: Dispatch<SetStateAction<boolean>>
}


export const Settings = (props: SettingsType) => {
    const [searchChange, setSearchChange] = useState(false)

    const blockHandler = () => {
        props.setBtnToggleBlock(true)
        props.setBtnToggleList(false)
    }
    const listHandler = () => {
        props.setBtnToggleList(true)
        props.setBtnToggleBlock(false)

    }

    return (

        <section className={s.settings}>
            <div className={s.group}>
                <div className={s.searchWrapper}>
                    <input data-test-id='input-search'
                           className={`${s.search} ${searchChange ? s.focus : ''} `} type="search"
                           placeholder="Поиск книги или автора…"/>
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    {searchChange ? ' ': <button type="button" className={s.searchBtn} />}
                    <button data-test-id='button-search-open' onClick={() => setSearchChange(true)}
                            className={`${s.searchIcon} ${searchChange ? s.focus : ''} `}
                            type="button"><img src={IconSearch} alt="иконка с поиском"/></button>
                    <button data-test-id='button-search-close'
                            onClick={() => setSearchChange(false)}
                            className={`${s.btnSearch} ${searchChange ? s.focus : ''} `}
                            type="button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12.4711 3.52859C12.7314 3.78894 12.7314 4.21105 12.4711 4.4714L4.47108 12.4714C4.21073 12.7317 3.78862 12.7317 3.52827 12.4714C3.26792 12.2111 3.26792 11.7889 3.52827 11.5286L11.5283 3.52859C11.7886 3.26824 12.2107 3.26824 12.4711 3.52859Z"
                                  fill="url(#paint0_linear_16007_32669)"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3.52827 3.52859C3.78862 3.26824 4.21073 3.26824 4.47108 3.52859L12.4711 11.5286C12.7314 11.7889 12.7314 12.2111 12.4711 12.4714C12.2107 12.7317 11.7886 12.7317 11.5283 12.4714L3.52827 4.4714C3.26792 4.21105 3.26792 3.78894 3.52827 3.52859Z"
                                  fill="url(#paint1_linear_16007_32669)"/>
                            <defs>
                                <linearGradient id="paint0_linear_16007_32669" x1="7.83158"
                                                y1="-14.0208" x2="-28.2403" y2="14.5878"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F83600"/>
                                    <stop offset="1" stopColor="#F9D423"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_16007_32669" x1="7.83158"
                                                y1="-14.0208" x2="-28.2403" y2="14.5878"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F83600"/>
                                    <stop offset="1" stopColor="#F9D423"/>
                                </linearGradient>
                            </defs>
                        </svg>

                    </button>
                </div>

                <button type="button" className={`${s.sort} ${searchChange ? s.focus : ''} `}><img
                    className={s.sortIcon} src={IconRait} alt="иконка со списком"/><span
                    className={s.btnName}>По рейтингу</span></button>
            </div>
            <div className={`${s.group} ${searchChange ? s.focus : ''} `}>
                <button type="button" data-test-id='button-menu-view-window'
                        onClick={blockHandler}
                        className={`${s.btnView} ${props.btnToggleBlock ? s.active : ''}`}>
                    <BlockIcon
                        className={props.btnToggleBlock ? s.btnViewIconActive : s.btnViewIcon}/>
                </button>
                <button type="button" onClick={listHandler} data-test-id='button-menu-view-list'
                        className={`${s.btnView} ${props.btnToggleList ? s.active : ''}`}>
                    <ListIcon
                        className={props.btnToggleList ? s.btnViewIconActive : s.btnViewIcon}/>
                </button>
            </div>
        </section>
    );
}
