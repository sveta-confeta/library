import React, {Dispatch, SetStateAction} from 'react';

import {BlockIcon} from '../../../assets/icon-components/block-icon';
import {ListIcon} from '../../../assets/icon-components/list-icon';
import IconRait from '../../../assets/icon-rait.svg'
import IconSearch from '../../../assets/icon-search.svg'

import s from './settings.module.css'

type SettingsType={
    btnToggleList:boolean
    setBtnToggleList:Dispatch<SetStateAction<boolean>>
    btnToggleBlock:boolean
    setBtnToggleBlock:Dispatch<SetStateAction<boolean>>
}



export const Settings = (props:SettingsType) => {

    const blockHandler=()=>{

        props.setBtnToggleBlock(true)
        props.setBtnToggleList(false)
    }
    const listHandler=()=>{
       props.setBtnToggleList(true)
        props.setBtnToggleBlock(false)

    }

    return (

    <section className={s.settings}>
        <div className={s.group}>
        <div className={s.searchWrapper}>
            <input className={s.search} type="search" placeholder="Поиск книги или автора…"/>
            <img src={IconSearch} className={s.searchIcon} alt="иконка с поиском"/>
        </div>

        <button type="button" className={s.sort}><img className={s.sortIcon} src={IconRait} alt="иконка со списком"/><span
            className={s.btnName}>По рейтингу</span></button>
        </div>
        <div className={s.group}>
            <button type="button" data-test-id='button-menu-view-window'
                    onClick={blockHandler}
                    className={`${s.btnView} ${props.btnToggleBlock ? s.active : ''}`}>
               <BlockIcon className={props.btnToggleBlock? s.btnViewIconActive : s.btnViewIcon} />
            </button>
            <button type="button" onClick={listHandler} data-test-id='button-menu-view-list'
                    className={`${s.btnView} ${props.btnToggleList ? s.active : ''}`}>
                <ListIcon className={props.btnToggleList ? s.btnViewIconActive : s.btnViewIcon}/>
            </button>
        </div>
    </section>
);}
