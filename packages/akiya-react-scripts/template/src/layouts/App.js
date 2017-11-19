import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router'
import { connect } from 'react-redux'

import HomeLayout from '../pages/HomeLayout/HomeLayout'
import PingPongLayout from '../pages/PingPongLayout/PingPongLayout'
import Spinner from '../components/Spinner/Spinner'

class App extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    isFetching: false,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" name="Home" component={HomeLayout} />
          <Route exact path="/ping-pong" name="PingPong" component={PingPongLayout} />
        </Switch>
        <Spinner visible={this.props.isFetching} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.general.isFetching,
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
