'use client'
import React from 'react'
import Button from '../UI/Button'
import { DropdownMenu, DropdownItem, DropdownList } from '../DropdownMenu'
import HeaderContainer from '@/containers/HeaderContainer'
import { LOCATION, DATES } from '@/mock'
import styles from './StickyHeader.module.scss'
import Icon from '../UI/Icon'

function StickyHeader() {
  const CheckboxButton = ({ text }: { text: string }) => {
    return (
      <DropdownItem className={styles.toggleButton}>
        <label>
          <input type='checkbox' name='checkbox' />
          <span>{text}</span>
        </label>
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
    <div className={styles.stickyHeaderContainer}>
      <HeaderContainer className={styles.stickyHeader}>
        <DropdownMenu trigger={<DropdownTriggerButton />}>
          <DropdownList>
            <h4 className={styles.title}>{LOCATION.title}</h4>
            {LOCATION.places.map((place) => (
              <CheckboxButton key={place.id} text={place.place} />
            ))}
          </DropdownList>
          <DropdownList className={styles.datesList}>
            <h4 className={styles.title}>{DATES.title}</h4>
            {DATES.items.map((date) => (
              <CheckboxButton key={date.id} text={date.date} />
            ))}
          </DropdownList>
        </DropdownMenu>
        <Button variant='icon' icon='calendar' size={24}>
          <span>Takvimde Gör</span>
        </Button>
      </HeaderContainer>
    </div>
  )
}

export default StickyHeader
