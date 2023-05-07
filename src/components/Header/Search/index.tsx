import React from 'react'
import styles from './Search.module.scss'
import Icon from '../../UI/Icon'

function Search() {
  return (
    <label className={styles.search}>
      <Icon icon='search' size={24} />
      <input type='text' placeholder='Etkinlik ara' />
    </label>
  )
}

export default Search
