import { cond, always, equals, T } from 'ramda'

import { showLoader, hiddenLoader } from '../general'

// actions
export const UPDATE_HOME_CONTENT = 'UPDATE_HOME_CONTENT'

export const initialState = {
  content: '',
}

// reducer
export default (state = initialState, action) => {
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
export const updateContent = (content) => ({
  type: UPDATE_HOME_CONTENT,
  payload: content
})

// side effect (thunks or epics)
export const getHomeContent = () => (dispatch, getState) => {
  // dummy data
  dispatch(showLoader())
  import('../../../fixtures/home.js')
    .then(({ default: res }) => {
      dispatch(updateContent(res.content))
      dispatch(hiddenLoader())
    })
    .catch(err => console.error('load home data failed'))
}
