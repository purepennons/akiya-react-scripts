// @flow
import { type PingPongState } from '../../../types/state'
import { type Action } from '../../../types/actions'

import { cond, always, equals, T } from 'ramda'

// actions
export const PING: string = 'PING'
export const PONG: string = 'PONG'

export const initialState: PingPongState = {
  isPinging: false,
}

// reducer
export default (
  state: PingPongState = initialState,
  action: Action,
): PingPongState => {
  return cond([
    [equals(PING), () => ({ isPinging: true })],
    [equals(PONG), () => ({ isPinging: false })],
    [T, always(state)],
  ])(action.type)
}

// action creators
export const ping = (): Action => ({
  type: PING,
  payload: {},
})

export const pong = (): Action => ({
  type: PONG,
  payload: {},
})

// side effect (thunks or epics)
export const pingPong = () => (dispatch: Function, getState: Function) => {
  dispatch(ping())
  setTimeout(() => dispatch(pong()), 1000)
}
