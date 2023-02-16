import React from 'react';


export const Preloader = () => {
    return (


        <svg style={{position: 'absolute', left: '50%', top: '50%',margin: "auto", background: "none", display: "block",shapeRendering:"auto"}}
             xmlns="http://www.w3.org/2000/svg"
             width="64px" height="64px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="#f8ad00" strokeWidth="10" r="31"
                    strokeDasharray="146.08405839192537 50.69468613064179">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                  dur="1s" values="0 50 50;360 50 50"
                                  keyTimes="0;1"></animateTransform>
            </circle>
        </svg>
    );
};

