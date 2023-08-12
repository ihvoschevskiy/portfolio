import './Education.css'
import { StyledList } from '@components/StyledList/StyledList'
import { Subtitle } from '@components/Subtitle/Subtitle'
import { education } from '@data/app.data'
import React, { FC } from 'react'

export const Education: FC = () => {
  return (
    <section className="education">
      <Subtitle subtitle="education" />
      <StyledList data={education} className="education__styled-list" />
    </section>
  )
}
