import './Caption.css'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  modifier?: 'long' | 'medium' | 'short'
  className?: string
}

export const Caption: FC<IProps> = ({ modifier, className }) => {
  return (
    <div className={cn('caption', { [`caption--${modifier}`]: modifier }, className)}>
      <span className="caption__fname">Igor`</span>
      <span className="caption__lname">Hvoschevskiy</span>
      <span className="caption__role">Frontend Developer</span>
    </div>
  )
}
