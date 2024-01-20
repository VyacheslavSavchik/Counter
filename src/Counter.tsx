import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CounterRootStateType} from "./state/store";
import {decrementAC, incrementAC, resetAC, setValueAC} from "./state/count-reducer";
import s from './Counter.module.css';
import {Settings} from "./Settings";

export type initType = {
    value: number
    maxValue: number
    startValue: number
}

export const Counter = () => {
    let counter = useSelector<CounterRootStateType, initType>((state) => state.settings)
    const dispatch = useDispatch()


    useEffect(() => {
        let value = localStorage.getItem('setting-state')
        dispatch(setValueAC(Number(value)))
    }, [])

    const increment = () => {
        dispatch(incrementAC(counter.value))
    }

    const decrement = () => {
        dispatch(decrementAC(counter.value))
    }

    const reset = () => {
        dispatch(resetAC(counter.value))
    }

    const incDisable = counter.value === counter.maxValue
    const decDisable = counter.value <= 0
    const resDisable = counter.value === 0
    const classes = `${s.counter} ${incDisable ? s.red : ''}`

    return (
        <div>
            <div className={classes}>{counter.value}</div>
            <span><button
                disabled={incDisable}
                className={s.inc}
                onClick={() => {
                    increment()
                }}>increment
            </button>
            <button
                disabled={decDisable}
                className={s.inc}
                onClick={decrement}>decrement
            </button>
            </span>
            <button
                disabled={resDisable}
                className={s.reset}
                onClick={() => {
                    reset()
                }}>reset
            </button>
            <Settings value={counter.value} maxValue={counter.maxValue} startValue={counter.startValue}/>
        </div>
    )
}



