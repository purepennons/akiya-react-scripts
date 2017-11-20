import { cond, always, equals, T } from 'ramda'

// actions
export const PING = 'PING'
export const PONG = 'PONG'

export const initialState = {
  isPinging: false,
}

// reducer
export default (state = initialState, action) => {
  return cond([
    [equals(PING), () => ({ isPinging: true })],
    [equals(PONG), () => ({ isPinging: false })],
    [T, always(state)],
  ])(action.type)
}

// action creators
export const ping = () => ({
  type: PING,
  payload: {},
})

export const pong = () => ({
  type: PONG,
  payload: {},
})

// side effect (thunks or epics)
export const pingPong = () => (dispatch, getState) => {
  dispatch(ping())
  setTimeout(() => dispatch(pong()), 1000)
}
