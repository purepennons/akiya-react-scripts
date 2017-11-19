// @flow
import { type General } from '../../../types/state'
import { type Action } from '../../../types/actions'

import { cond, always, equals, T } from 'ramda';

// actions
export const SET_FETCHING_STATE: string = 'SET_FETCHING_STATE'

export const initialState: General = {
  isFetching: false,
  isModalVisible: false,
}

// reducer
export default (state: General = initialState, action: Action): General => {
  return cond([
    [
      equals(SET_FETCHING_STATE),
      () => {
        return { ...state, ...action.payload }
      },
    ],
    [T, always(state)],
  ])(action.type)
}

// action creators
export const setFetchingState = (isFetching: boolean): Action => ({
  type: SET_FETCHING_STATE,
  payload: { isFetching },
})

export const showLoader = (): Action => setFetchingState(true)
export const hiddenLoader = (): Action => setFetchingState(false)

// side effect (thunks or epics)
