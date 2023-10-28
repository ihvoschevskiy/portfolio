import React, { FC } from 'react'

interface IProps {
  type: 'open' | 'close'
  className?: string
}

export const MobileMenuIco: FC<IProps> = ({ type, className }) => {
  if (type === 'open')
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M5.33333 10.6666H16" stroke="currentColor" strokeWidth="2.22222" strokeLinecap="round" />
        <path d="M5.33333 16H26.6667" stroke="currentColor" strokeWidth="2.22222" strokeLinecap="round" />
        <path d="M16 21.3334H26.6667" stroke="currentColor" strokeWidth="2.22222" strokeLinecap="round" />
      </svg>
    )

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" rx="5.33333" fill="none" />
      <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" />
    </svg>
  )
}
