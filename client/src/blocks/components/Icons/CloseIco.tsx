import React, { FC } from 'react'

interface IProps {
  className?: string
}

export const CloseIco: FC<IProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.6 0H7.2C5.88 0 4.8 1.08 4.8 2.4V16.8C4.8 18.132 5.88 19.2 7.2 19.2H21.6C22.932 19.2 24 18.132 24 16.8V2.4C24 1.08 22.932 0 21.6 0ZM21.6 16.8H7.2V2.4H21.6V16.8ZM2.4 4.8V21.6H19.2V24H2.4C1.08 24 0 22.932 0 21.6V4.8H2.4ZM9.324 13.008L12.72 9.6L9.324 6.18L11.004 4.5L14.4 7.92L17.808 4.524L19.488 6.204L16.08 9.6L19.476 13.008L17.796 14.688L14.4 11.28L11.004 14.688L9.324 13.008Z"
        fill="currentColor"
      />
    </svg>
  )
}
