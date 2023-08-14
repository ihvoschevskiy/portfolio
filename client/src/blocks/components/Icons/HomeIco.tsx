import React, { FC } from 'react'

interface IProps {
  className?: string
}

export const HomeIco: FC<IProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      <path d="M28.8 45V35.8235H35.2V45H43.2V32.7647H48L32 19L16 32.7647H20.8V45H28.8Z" fill="var(--color-accent)" />
      <circle cx="32" cy="32" r="31.5" fill="none" stroke="currentColor" />
    </svg>
  )
}
