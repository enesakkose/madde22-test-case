"use client"
import React from 'react'
import Icon from '../Icon'
import { useSelectedLayoutSegment } from 'next/navigation'
import styles from './TopBar.module.scss'

enum TITLES {
  cocuk = 'ÇOCUK',
  konser = 'KONSER',
  sinema = 'SİNEMA',
  tiyatro = 'TİYATRO',
  standup = 'STAND UP'
} 

function TopBar({ title }: { title: string }) {
  //const segment: keyof typeof TITLES | null = useSelectedLayoutSegment()
  //console.log(segment)
  return (
    <div className={styles.topBar}>
      <Icon icon='logo' size={60} />
      <h1>ETKİNLİKLER</h1>
    </div>
  )
}

export default TopBar
