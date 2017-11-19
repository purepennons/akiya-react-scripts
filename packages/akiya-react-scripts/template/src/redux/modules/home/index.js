// @flow
import { type HomeState } from '../../../types/state'
import { type Action } from '../../../types/actions'

import { cond, always, equals, T } from 'ramda'

import { showLoader, hiddenLoader } from '../general'

// actions
export const UPDATE_HOME_CONTENT: string = 'UPDATE_HOME_CONTENT'

export const initialState: HomeState = {
  content: '',
}

// reducer
export default (state: HomeState = initialState, action: Action): HomeState => {
  return cond([
    [
      equals(UPDATE_HOME_CONTENT),
      () => {
        return { ...state, content: action.payload }
      },
    ],
    [T, always(state)],
  ])(action.type)
}

// action creators
export const updateContent = (content: string): Action => ({
  type: UPDATE_HOME_CONTENT,
  payload: content
})

// side effect (thunks or epics)
export const getHomeContent = () => (dispatch: Function, getState: Function) => {
  // dummy data
  dispatch(showLoader())
  import('../../../fixtures/home.js')
    .then(({ default: res }) => {
      dispatch(updateContent(res.content))
      dispatch(hiddenLoader())
    })
    .catch(err => console.error('load home data failed'))
}
