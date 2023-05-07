'use client'
import React from 'react'
import NavLink from '@/components/UI/NavLink'
import { useSelectedLayoutSegment } from 'next/navigation'
import { TABS } from '@/utils/constants'
import styles from './Nav.module.scss'

function Nav() {
  const segment = useSelectedLayoutSegment()

  return (
    <nav className={styles.tabs}>
      <NavLink active={null === segment} href='/'>
        Tüm Etkinlikler
      </NavLink>
      <NavLink active={'tiyatro' === segment} href='/tiyatro'>
        Tiyatro
      </NavLink>
      <NavLink active={'konser' === segment} href='/konser'>
        Konser
      </NavLink>
      <NavLink active={'standup' === segment} href='/standup'>
        Stand Up
      </NavLink>
      <NavLink active={'cocuk' === segment} href='/cocuk'>
        Çocuk
      </NavLink>
    </nav>
  )
}

export default Nav
