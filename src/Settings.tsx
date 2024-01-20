import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Counter.module.css'
import {useDispatch} from "react-redux";
import {setValuesAC} from "./state/settings-reducer";

type PropsType = {
    value: number
    maxValue: number
    startValue: number

}

export const Settings = ({value, maxValue, startValue}: PropsType) => {
    const dispatch = useDispatch()

    const [v1, SetV1] = useState<number>(0)
    const [v2, SetV2] = useState<number>(0)

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        SetV1(Number(e.currentTarget.value))
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        SetV2(Number(e.currentTarget.value))
    }

    const setValues = () => {
        dispatch(setValuesAC({startValue:v1, maxValue:v2}))
    }

    return (
        <div className={s.set}>
            max<input className={s.input} type={'number'} value={v2} onChange={changeMaxValue}/>
            min<input className={s.input} type={'number'} value={v1} onChange={changeMinValue}/>
            <button
                className={s.btnSet}
                //disabled={startValue >= maxValue || startValue < 0}
                onClick={setValues}>SET
            </button>
        </div>
    );
}




