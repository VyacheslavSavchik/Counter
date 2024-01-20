import React from 'react';
import s from "./Counter.module.css";

type PropsType = {
    addNumbers: (value: number) => void
    resNumbers: (value: number) => void
    resetDisabled: boolean
    incDisabled: boolean
    value: number
}


export const Buttons = ({addNumbers, resNumbers, resetDisabled, incDisabled, value}: PropsType) => {

        const resetNumbers = (value: number) => resNumbers(value)

        const addNumber = (value: number) => addNumbers(value)


        const buttonInc = `${s.inc} ${incDisabled ? s.disabled : ''}`
        const buttonRes = `${s.reset} ${resetDisabled ? s.disabled : ''}`
    return (
        <div>
            <button disabled={resetDisabled}
                    className={buttonRes}
                    onClick={() => {resetNumbers(value)}}>RESET</button>
            <button disabled={incDisabled}
                    className={buttonInc}
                    onClick={() => {addNumber(value)}}>INC</button>
        </div>
    );
 }

