"use client"
import React, { useState } from 'react'
import Button from '../UI/Button'
import { DropdownMenu, DropdownItem } from '../DropdownMenu'
import { LOCATION, DATES } from '@/mock'
import styles from './StickyHeader.module.scss'
import Icon from '../UI/Icon'

function StickyHeader() {
  const CheckboxButton = ({ text }: { text: string }) => {

    return (
      <DropdownItem  className={styles.toggleButton}>
        <input type='checkbox' name='checkbox'  />
        <span>{text}</span>
      </DropdownItem>
    )
  }

  const DropdownTriggerButton = () => {
    return (
      <>
        <Icon icon='filter' size={24} />
        Filtreler
      </>
    )
  }

  return (
    <div className={styles.stickyHeader}>
      <DropdownMenu trigger={<DropdownTriggerButton />}>
        <h4 className={styles.title}>{LOCATION.title}</h4>
        {LOCATION.places.map((place) => (
          <CheckboxButton key={place.id} text={place.place}  />
        ))}
        <h4>{DATES.title}</h4>
        {DATES.items.map((date) => (
          <CheckboxButton key={date.id} text={date.date}  />
        ))}
        <Button variant='primary'>Uygula</Button>
      </DropdownMenu>
      <Button variant='icon' icon='calendar' size={24}>
        <span>Takvimde Gör</span>
      </Button>
    </div>
  )
}

export default StickyHeader
