import './Title.css'
import cn from 'classnames'
import React from 'react'

interface IProps {
  className?: string
}

export const Title = React.forwardRef<HTMLDivElement, IProps>(({ className }, ref) => {
  return (
    <div ref={ref} className={cn('title-wr', className)}>
      <h1 className="title">
        <span>M</span>y <span>P</span>ortfolio
      </h1>
    </div>
  )
})

Title.displayName = 'Title'
