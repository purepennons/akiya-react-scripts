import { cond, always, equals, T } from 'ramda';

// actions
export const SET_FETCHING_STATE = 'SET_FETCHING_STATE'

export const initialState = {
  isFetching: false,
  isModalVisible: false,
}

// reducer
export default (state = initialState, action) => {
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
export const setFetchingState = (isFetching: boolean) => ({
  type: SET_FETCHING_STATE,
  payload: { isFetching },
})

export const showLoader = () => setFetchingState(true)
export const hiddenLoader = () => setFetchingState(false)

// side effect (thunks or epics)
