import React from 'react'
import PropTypes from 'prop-types'

const PingPong = props => (
  <div>
    <h1>Play Ping-Pong</h1>
    <button onClick={props.onClick}>Ping</button>
    <p>is pinging? {props.isPinging.toString()}</p>
  </div>
)

PingPong.propTypes = {
  isPinging: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PingPong

