import React, { FC } from 'react'

interface IProps {
  className: string
}

export const StyledListIco: FC<IProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <circle
        cx="10.9454"
        cy="10.9454"
        r="8.94537"
        stroke="currentColor"
        strokeWidth="2.23634"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx="10.9453"
        cy="10.9453"
        r="4.47268"
        stroke="currentColor"
        strokeWidth="2.23634"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
