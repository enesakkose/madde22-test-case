import React, { createElement } from 'react'
import clsx from 'clsx'
import styles from './HeaderContainer.module.scss'

function HeaderContainer({
  children,
  className,
  as = 'div'
}: {
  children: React.ReactNode
  className?: string
  as?: string
}) {
  return (
    createElement(as, { className: clsx(styles.headerContainer, className) }, children)
  )
}

export default HeaderContainer
