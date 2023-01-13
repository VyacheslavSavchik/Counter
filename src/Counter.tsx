import React from 'react';
import s from './Counter.module.css'

type Counter = {
    maxNumbers: number
    numbers: number
}

export const Counter = (props: Counter) => {
    const disabled = props.numbers === props.maxNumbers

    const classes = `${s.counter} ${disabled ? s.red : ''}`

    return (
        <div className={classes}>{props.numbers}</div>
    );
};

