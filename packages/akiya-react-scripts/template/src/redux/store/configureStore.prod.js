import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import reduxThunk from 'redux-thunk'

import { rootReducer } from '../modules/'
import history from './history'

const initialState = {}

const middleware = applyMiddleware(reduxThunk, routerMiddleware(history))

export default createStore(rootReducer, initialState, middleware)
