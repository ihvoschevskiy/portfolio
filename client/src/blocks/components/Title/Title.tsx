import './Title.css'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  className?: string
}

export const Title: FC<IProps> = ({ className }) => {
  return (
    <div className={cn('title-wr', className)}>
      <h1 className="title">
        <span>M</span>y <span>P</span>ortfolio
      </h1>
    </div>
  )
}
