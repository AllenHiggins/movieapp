import {combineReducers} from 'redux'

import {filmReducer} from './filim-reducer'
import {userInputReducer} from './userInput-reducer'

export const reducers = combineReducers({
    filmReducer,
    userInputReducer
});