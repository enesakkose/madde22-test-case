import React from 'react'
import Button from '../Button'
import styles from './StickyHeader.module.scss'

function StickyHeader() {
  return (
    <div className={styles.stickyHeader}>
      <Button variant='icon' icon='filter' size={24}>
        Filtreler
      </Button>
      <Button variant='icon' icon='calendar' size={24}>
        <span>Takvimde Gör</span> 
      </Button>
    </div>
  )
}

export default StickyHeader