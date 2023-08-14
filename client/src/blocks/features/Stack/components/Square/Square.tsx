import './Square.css'
import React, { FC } from 'react'

interface IProps {
  children: React.ReactNode
}

export const Square: FC<IProps> = ({ children }) => {
  return <div className="square">{children}</div>
}
