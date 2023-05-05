'use client'
import React from 'react'
import NavLink from '@/components/NavLink'
import { useSelectedLayoutSegment } from 'next/navigation'
import { TABS } from '@/utils/constants'
import styles from './Nav.module.scss'

function Nav() {
  const segment = useSelectedLayoutSegment()

  return (
    <nav className={styles.tabs}>
      {TABS.map((tab) => (
        <NavLink
          key={tab.tab}
          active={tab.segment === segment}
          href={tab.href}
        >
          {tab.tab}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav
