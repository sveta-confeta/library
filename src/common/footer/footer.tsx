import React from 'react';

import {FacebookIcon} from '../../assets/icon-components/face-icon';
import {InstIcon} from '../../assets/icon-components/inst-icon';
import {LinkedIcon} from '../../assets/icon-components/linked-icon';
import {VkIcon} from '../../assets/icon-components/vk-icon';

import s from './footer.module.css'

const socIcons: JSX.Element[] = [<VkIcon/>, <FacebookIcon/>, <InstIcon/>, <LinkedIcon/>]


export const Footer = () => (

    <footer className={s.footer}>
        <div className={s.footerWrapper}>
            <p className={s.law}>© 2020-2023 Cleverland. Все права защищены.</p>
            <div className={s.socWrapper}>
                {socIcons.map<JSX.Element>(m => <a href='#' className={s.socIcon}>{m}</a>)}
            </div>
        </div>

    </footer>
);


