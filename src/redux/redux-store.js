import {combineReducers, createStore} from 'redux'
import typesReducer from './types-reducer'

let reducers = combineReducers({
    typesPage: typesReducer
})

let store = createStore(reducers)

export default store