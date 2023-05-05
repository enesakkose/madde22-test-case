import React from 'react'
import AddBtn from '../AddBtn'
import Button from '../Button'
import styles from './EventCard.module.scss'

function EventCard() {
  return (
    <div className={styles.eventCard}>
      <div className={styles.blackBar}/>
      <div className={styles.actionBtns}>
        <Button variant='primary'>Bilet Al</Button>
        <AddBtn/>
      </div>
    </div>
  )
}

export default EventCard