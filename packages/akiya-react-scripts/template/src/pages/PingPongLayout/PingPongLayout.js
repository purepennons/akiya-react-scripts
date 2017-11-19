import React from 'react'

import Header from '../../components/Header/Header'
import PingPongContainer from '../../containers/PingPongContainer'

const PingPongLayout = props => {
  return (
    <div className="ping-pong-layout">
      <Header />
      <PingPongContainer />
    </div>
  )
}

export default PingPongLayout
