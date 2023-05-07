import React from 'react'
import Button from '@/components/UI/Button'
import AddBtn from '@/components/AddBtn'
import styles from './ActionBtns.module.scss'

function ActionBtns() {
  return (
    <div className={styles.actionBtns}>
      <Button variant='primary'>Satın Al</Button>
      <AddBtn />
    </div>
  )
}

export default ActionBtns
