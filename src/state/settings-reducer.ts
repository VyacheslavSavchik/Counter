type ActionsType = setValuesActionType
    // | onChangeMaxValueActionType
    // | onChangeMinValueActionType

const initState = {
    value: 0,
    maxValue: 0,
    startValue: 0,
}
type InitStateType = typeof initState


export const settingsReducer = (state: InitStateType = initState,  action: ActionsType):InitStateType => {
    switch (action.type) {
        case "SET-VALUES":
            return {...state, maxValue :action.payload.maxValue, startValue: action.payload.startValue}
        // case "CHANGE-MAX-VALUE":
        //     return {...state, maxValue: action.value}
        // case "CHANGE-MIN-VALUE":
        //     return {...state, startValue: action.value}
        default:
            return state
    }
}

export type setValuesActionType = ReturnType<typeof setValuesAC>
// export type onChangeMaxValueActionType = ReturnType<typeof onChangeMaxValueAC>
// export type onChangeMinValueActionType = ReturnType<typeof onChangeMinValueAC>

export const setValuesAC = (payload: {maxValue:number, startValue:number} ) => ({
    type: 'SET-VALUES',
    payload
} as const)

// export const onChangeMaxValueAC = (value: number,) => ({
//     type: 'CHANGE-MAX-VALUE',
//     value,
// } as const)
//
// export const onChangeMinValueAC = (value: number) => ({
//     type: 'CHANGE-MIN-VALUE',
//     value
// } as const)