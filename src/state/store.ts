import { combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./count-reducer";
import {settingsReducer} from "./settings-reducer";


const rootReducer = combineReducers({
    count: countReducer,
    settings: settingsReducer
})
let preloadedState
const persistedCounterString = localStorage.getItem('counter-state')
const persistedSettingString = localStorage.getItem('setting-state')
if (persistedCounterString !== null) {
    preloadedState = JSON.parse(persistedCounterString)}
    else if(persistedSettingString !== null) {
    preloadedState = JSON.parse(persistedSettingString)
}

export const store = legacy_createStore(rootReducer, preloadedState)

store.subscribe(() => {
    localStorage.setItem('counter-state',JSON.stringify(store.getState().count))
    localStorage.setItem('setting-state',JSON.stringify(store.getState().settings))
})

export type CounterRootStateType = ReturnType<typeof rootReducer>
export type CounterStoreType = typeof store