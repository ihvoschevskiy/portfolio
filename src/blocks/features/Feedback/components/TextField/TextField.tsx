import './TextField.css'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  name: string
  autofocus?: boolean
  placeholder: string
  className?: string
}

export const TextField: FC<IProps> = ({ name, autofocus, placeholder, className }) => {
  return (
    <label className={cn('text-field', className)}>
      <input name={name} type="text" placeholder={placeholder} className="text-field__input" autoFocus={autofocus} />
    </label>
  )
}
