type ActionsType = incrementActionType | resetActionType | setValueActionType | decrementActionType

const initState = {
    value: 0,
}

type InitStateType = typeof initState

export const countReducer = (state: InitStateType = initState, action: ActionsType):InitStateType => {
    switch (action.type) {
        case "INCREMENT":
                return {...state, value: action.value + 1}
        case "DECREMENT":
            return{...state, value: action.value - 1}
        case "RESET":
            return {...state, value: 0}
        case "SET":
            return {...state, value: action.value}
        default:
            return state
    }

}

export type incrementActionType = ReturnType<typeof incrementAC>
export type decrementActionType = ReturnType<typeof decrementAC>
export type resetActionType = ReturnType<typeof resetAC>
export type setValueActionType = ReturnType<typeof setValueAC>


export const incrementAC = (value: number) => ({
    type: 'INCREMENT',
    value
} as const)

export const decrementAC = (value: number) => ({
    type: 'DECREMENT',
    value
})

export const resetAC = (value: number) => ({
    type: 'RESET',
    value
} as const)

export const setValueAC = (value: number) => ({
    type: 'SET',
    value
} as const)


