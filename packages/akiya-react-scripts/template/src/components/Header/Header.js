import React from 'react'
import classnames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Header.scss'

const cx = classnames.bind(styles)

const Header = props => (
  <div className={cx('header')}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/ping-pong">Ping-Pong</Link>
      </li>
    </ul>
  </div>
)

export default Header
