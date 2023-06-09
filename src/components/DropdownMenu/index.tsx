'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Button from '../UI/Button'
import { useClickOutside } from '@/utils/hooks/useClickOutside'
import styles from './DropdownMenu.module.scss'

export const DropdownItem = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <li className={clsx(styles.item, className)}>{children}</li>
}

export const DropdownList = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return(
    <ul className={clsx(styles.dropdownList, className)}>
      {children}
    </ul>
  )
}

type DropdownPropsTypes = {
  trigger: string | React.ReactNode
  children: React.ReactNode
}

export function DropdownMenu({ trigger, children }: DropdownPropsTypes) {
  const [open, setOpen] = useState(false)
  const dropdownListRef = useClickOutside<HTMLDivElement>(() => setOpen(false))


  return (
    <div ref={dropdownListRef} className={styles.dropdownMenu}>
      <Button
        className={styles.trigger}
        onClick={() => setOpen((prev) => !prev)}
      >
        {trigger}
      </Button>
      {open && <div className={styles.dropdownListContainer}>{children}</div>}
    </div>
  )
}
