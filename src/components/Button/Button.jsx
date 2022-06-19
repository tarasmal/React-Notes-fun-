import React from 'react';
import './Button.css'
const Button = ({text, fc}) => {
    return (
        <button className={'button'} onClick={() => fc()}>
            {text}
        </button>
    );
};

export default Button;