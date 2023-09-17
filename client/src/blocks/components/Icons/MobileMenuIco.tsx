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
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <rect x="0.416667" y="0.416667" width="29.1667" height="29.1667" rx="6.25" fill="none" />
        <path d="M9.16669 10H20.8334" stroke="currentColor" strokeWidth="2.08333" strokeLinecap="round" />
        <path d="M9.16669 15H20.8334" stroke="currentColor" strokeWidth="2.08333" strokeLinecap="round" />
        <path d="M9.16669 20H20.8334" stroke="currentColor" strokeWidth="2.08333" strokeLinecap="round" />
        <rect
          x="0.416667"
          y="0.416667"
          width="29.1667"
          height="29.1667"
          rx="6.25"
          stroke="currentColor"
          strokeWidth="0.833333"
          fill="none"
        />
      </svg>
    )

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <rect x="0.416667" y="0.416667" width="29.1667" height="29.1667" rx="6.25" fill="none" />
      <path
        d="M9.16669 9.16669L20.8334 20.8334M20.8334 9.16669L9.16669 20.8334"
        stroke="currentColor"
        strokeWidth="2.08333"
        strokeLinecap="round"
      />
      <rect
        x="0.416667"
        y="0.416667"
        width="29.1667"
        height="29.1667"
        rx="6.25"
        stroke="currentColor"
        strokeWidth="0.833333"
        fill="none"
      />
    </svg>
  )
}
