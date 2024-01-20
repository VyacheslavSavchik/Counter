

type ActionsType = addNumberActionType | resNumbersActionType | toggleModeActionType

type StateType = {
    value: number
    isSet: boolean
    maxValue: number
}

export const countReducer = (state: StateType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-NUMBER":
            return {...state, value: action.value + 1}
        case "RES-NUMBER":
            return {...state, value: action.value = 0}
        case "SET-NUMBER":
            return {...state, isSet: action.isSet}
        default:
            return state
    }

}

export type addNumberActionType = {
    type: 'ADD-NUMBER'
    value: number
}

export type resNumbersActionType = {
    type: 'RES-NUMBER'
    value: number
}

export type toggleModeActionType = {
    type: 'SET-NUMBER'
    isSet: boolean
}


export const addNumberAC = (value: number): addNumberActionType => ({
    type: 'ADD-NUMBER',
    value
} as const)

export const resNumbersAC = (value: number): resNumbersActionType => ({
    type: 'RES-NUMBER',
    value
} as const)

export const toggleModeAC = (isSet: boolean):toggleModeActionType => ({
    type: 'SET-NUMBER',
    isSet
} as const)