import './Experience.css'
import { StyledList } from '@components/StyledList/StyledList'
import { Subtitle } from '@components/Subtitle/Subtitle'
import { experience } from '@data/app.data'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  className?: string
}

export const Experience: FC<IProps> = ({ className }) => {
  return (
    <section className={cn('experience', className)}>
      <Subtitle subtitle="experience" />
      <StyledList data={experience} className="experience__styled-list" />
    </section>
  )
}
