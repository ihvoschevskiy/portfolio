import './SubmitButton.css'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  className?: string
}

export const SubmitButton: FC<IProps> = ({ className }) => {
  return <button className={cn('submit-btn', className)}>send message</button>
}
