import React from 'react'
import clsx from 'clsx'
import styles from './MainContainer.module.scss'

type MainContainerPropsTypes = {
  children: React.ReactNode,
  className?: string
}

function MainContainer({ children, className }: MainContainerPropsTypes) {
  return <div className={clsx(styles.mainContainer, className)}>{children}</div>
}

export default MainContainer
