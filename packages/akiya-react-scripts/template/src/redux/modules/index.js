import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import general from './general'
import home from './home'
import pingPong from './pingPong'

export const rootReducer = combineReducers({
  general,
  home,
  pingPong,
  routing: routerReducer
})
