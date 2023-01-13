import React from 'react';
import s from './Counter.module.css'

type IncrementPropsType = {
    callback: ()=> void
    incDisabled: boolean
}

export const Increment = (props: IncrementPropsType) => {
    const addNumber = () => props.callback()

    const buttonClass = `${s.inc} ${props.incDisabled ? s.disabled : ''}`

    return (
        <span>
            <button disabled={props.incDisabled} className={buttonClass} onClick={addNumber}>INC</button>
            </span>
    );
};

