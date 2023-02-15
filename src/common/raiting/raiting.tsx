import React from 'react';

import s from './raiting.module.css'



type RaitingPropsType={
     value:number
    className?:string
    height?:string
    width?:string
}

export function Raiting(props:RaitingPropsType) {
    const valueStars=[0,1,2,3,4];

    return (
        <div className={`${s.raitingStarts} ${props.className} `}>
            {valueStars.map((m,ind) => (
                    <Star key={ind}  selected={props.value > m} height={props.height ? props.height :'27px'} width={props.width ? props.width :'27px'} fillColor='#FFBC1F' emptyColor='none' />
                ))}
        </div>
    )
}

type StarPropsType = {
    fillColor?:string
    emptyColor?:string
    height:string
    width:string
    selected:boolean
}
export function Star(props: StarPropsType) {
    return (
        <svg width={props.width} height={props.height} viewBox="-3.12 -3.12 30.24 30.24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"/>
            <g id="SVGRepo_iconCarrier">
                <path d="m12 2 2.4 7.619 7.6-.005-6.114 4.181 2.29 7.253L12 16.624l-6.181 4.424 2.29-7.253L2 9.615l7.595.004L12 2Z"  fill={props.selected ? props.fillColor : props.emptyColor} stroke={props.fillColor} strokeWidth="0.792" strokeMiterlimit="10" strokeLinejoin="round"/>
            </g>

        </svg>
    )
}



