import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  modifier?: 'left' | 'right'
  className?: string
}

export const ArrowIco: FC<IProps> = ({ className, modifier }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, `${className}--${modifier}`)}
      width="92"
      height="46"
      viewBox="0 0 92 46"
      fill="none"
    >
      <path d="M21.6846 0L7.62939e-06 21.9915L1.30108 23.311L22.9857 1.31949L21.6846 0Z" fill="currentColor" />
      <path d="M92 22.067H0V23.933H92V22.067Z" fill="currentColor" />
      <path d="M22.9857 44.6805L1.30109 22.689L1.52588e-05 24.0085L21.6846 46L22.9857 44.6805Z" fill="currentColor" />
    </svg>
  )
}
