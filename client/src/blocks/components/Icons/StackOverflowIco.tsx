import React, { FC } from 'react'

interface IProps {
  className?: string
}

export const StackOverflowIco: FC<IProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1365 17.7481V14.0065H17.4V19H6V14.0065H7.27059V17.7481H16.1365ZM8.66118 13.6587L8.92235 12.4347L15.1271 13.7213L14.8659 14.9454L8.66118 13.6587ZM9.48 10.7308L10.0165 9.61103L15.7624 12.2399L15.2259 13.3666L9.48 10.7308ZM11.0753 7.95579L11.8871 6.99603L16.7576 11.002L15.9459 11.9548L11.0753 7.95579ZM14.2165 5L18 10.0144L16.9835 10.7586L13.2 5.74416L14.2165 5ZM8.53412 16.5032V15.2514H14.8729V16.5032H8.53412Z"
        fill="currentColor"
      />
      <path
        d="M12.4414 21.7309C18.1939 21.3794 22.4923 16.3284 21.9546 10.9528C21.4296 5.7045 16.5346 1.89948 11.3508 2.25168C6.09554 2.60862 1.76748 7.16464 2.0097 12.4513C2.43712 20.7121 10.4219 21.8759 10.7678 21.764"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
