"use client"
import React, { useState } from 'react'
import clsx from 'clsx'
import Button from '@/components/UI/Button'
import Icon from '@/components/UI/Icon'
import styles from './EventInfo.module.scss'

type EventInfoPropsTypes = {
  title: string
  location: string
  info: string
  className?: string
}

function EventInfo({ title, location, info, className }: EventInfoPropsTypes) {
  const [ letter, setLetter ] = useState(20)
  return (
    <div className={styles.eventInfo}>
      <h3 className={clsx(styles.title, className)}>{title}</h3>
      <span className={styles.location}>
        <Icon icon='location' size={24} />
        {location}
      </span>
      <p className={styles.text}>
        {info.slice(0,letter)}
      <Button className={styles.detailBtn} variant='underline' onClick={() => setLetter(info.length)}>
        Detaylı Bilgi
      </Button> 
      </p>
    </div>
  )
}

export default EventInfo
