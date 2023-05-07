'use client'
import React from 'react'
import Icon from '../UI/Icon'
import { useSelectedLayoutSegment } from 'next/navigation'
import styles from './TopBar.module.scss'

function TopBar() {
  const segment = useSelectedLayoutSegment()
  return (
    <div className={styles.topBar}>
      <Icon icon='logo' size={60} />
      <h1>{segment?.toLocaleUpperCase('tr-TR') ?? 'ETKİNLİKLER'}</h1>
    </div>
  )
}

export default TopBar
