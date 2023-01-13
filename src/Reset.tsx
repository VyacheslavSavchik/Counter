import React from 'react';
import s from './Counter.module.css'

type ResetPropsType = {
    callback: () => void
    resetDisabled: boolean
}

export const Reset = (props: ResetPropsType) => {
    const resetNumbers = () => props.callback()

    let buttonClass1 = `${s.reset} ${props.resetDisabled ? s.disabled : ''}`

    return (
        <button disabled={props.resetDisabled} className={buttonClass1} onClick={resetNumbers}>RESET</button>
    );
};

