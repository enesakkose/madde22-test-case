import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import type { IconNameTypes } from '@/types'
import Icon from '@/components/UI/Icon'
import styles from './Button.module.scss'

type ButtonTypes = {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'underline' | 'icon'
  icon?: IconNameTypes
  size?: number
  fontSize?: 'sm' | 'md' | 'lg'
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({
  children,
  variant,
  icon,
  className,
  fontSize = 'lg',
  size,
  ...props
}: ButtonTypes) {
  if (icon)
    return (
      <button
        type='button'
        className={clsx(
          styles.button,
          styles.icon,
          styles[fontSize],
          className
        )}
        {...props}
      >
        <Icon icon={icon} size={size} />
        {children}
      </button>
    )

  if (variant)
    return (
      <button
        type='button'
        className={clsx(
          styles.button,
          styles[variant],
          styles[fontSize],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )

  return (
    <button
      type='button'
      className={clsx(styles.button, styles[fontSize], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
