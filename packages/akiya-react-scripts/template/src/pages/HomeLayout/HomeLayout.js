import React from 'react'
import classnames from 'classnames/bind'

import Header from '../../components/Header/Header'
import ContentContainer from '../../containers/ContentContainer'
import Footer from '../../components/Footer/Footer'

import styles from './HomeLayout.scss'

const cx = classnames.bind(styles)


const HomeLayout = props => {
  return (
    <div className={cx('home-layout')}>
      <Header />
      <ContentContainer />
      <Footer />
    </div>
  )
}

export default HomeLayout
