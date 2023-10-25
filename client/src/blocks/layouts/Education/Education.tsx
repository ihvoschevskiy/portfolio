import './Education.css'
import { StyledList } from '@components/StyledList/StyledList'
import { Subtitle } from '@components/Subtitle/Subtitle'
import { education } from '@data/app.data'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  className?: string
}

export const Education: FC<IProps> = ({ className }) => {
  return (
    <section className={cn('education', className)}>
      <Subtitle subtitle="education" />
      <StyledList data={education} className="education__styled-list" />
    </section>
  )
}
