import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

import styles from './Content.scss'

const cx = classnames.bind(styles)

class Content extends Component {
  static propTypes = {
    content: PropTypes.string
  }

  static defaultProps = {
    content: ''
  }
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getHomeContent()
  }

  render() {
    return (
      <div className={cx('content')}>{this.props.content || 'Content'}</div>
    )
  }
}

export default Content
