import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import reduxThunk from 'redux-thunk'

import { rootReducer } from '../modules/'
import history from './history'

const initialState = {}

const middleware = applyMiddleware(
  reduxThunk,
  routerMiddleware(history),
  createLogger(),
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(middleware),
)
