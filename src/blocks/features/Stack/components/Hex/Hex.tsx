import './Hex.css'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  children?: React.ReactNode
  modifier?: 'accent'
}

export const Hex: FC<IProps> = ({ children, modifier }) => {
  return (
    <div className={cn('hex', { [`hex--${modifier}`]: modifier })}>
      {children && <div className="hex__in">{children}</div>}
    </div>
  )
}
