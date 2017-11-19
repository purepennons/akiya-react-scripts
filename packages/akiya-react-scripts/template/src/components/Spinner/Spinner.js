import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

import spinnerIcon from '../../assets/spinner.svg'
import styles from './Spinner.scss'

const cx = classnames.bind(styles)

const Spinner = props => (
  <div
    className={cx({
      spinner: true,
      show: props.visible,
      hidden: !props.visible,
    })}
  >
    <img src={spinnerIcon} alt="loading..." />
  </div>
)

Spinner.propTypes = {
  visible: PropTypes.bool,
}

Spinner.defaultProps = {
  visible: false,
}

export default Spinner
