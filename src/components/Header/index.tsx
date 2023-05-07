import React from 'react'
import Search from './Search'
import Nav from './Nav'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <Nav />
      <Search />
    </header>
  )
}

export default Header
