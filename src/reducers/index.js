import {combineReducers} from 'redux'
import { authReducer} from './AuthReducer'
import {truckReducer} from "./postReducer"


export const rootReducer = combineReducers({
    authReducer,
    truckReducer,
})