import React from 'react'
import Search from './Search'
import Nav from './Nav'
import HeaderContainer from '@/containers/HeaderContainer'
import styles from './Header.module.scss'

function Header() {
  return (
    <HeaderContainer as='header' className={styles.header}>
      <Nav />
      <Search />
    </HeaderContainer>
  )
}

export default Header
