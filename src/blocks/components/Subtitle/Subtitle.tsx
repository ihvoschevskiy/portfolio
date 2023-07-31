import './Subtitle.css'
import React, { FC } from 'react'

interface IProps {
  subtitle: string
  modifier?: 'underlined'
}

export const Subtitle: FC<IProps> = ({ subtitle, modifier }) => {
  return (
    <div className="subtitle">
      <h2 className="subtitle__header">{subtitle}</h2>
      {modifier === 'underlined' && <div className="subtitle__line"></div>}
    </div>
  )
}
