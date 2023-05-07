import React from 'react'
import styles from './NoData.module.scss'

function NoData() {
  return (
    <div className={styles.noData}>
      <h3>Aradığınız kategori için etkinlik bulunamamıştır...</h3> 
    </div>
  )
}

export default NoData