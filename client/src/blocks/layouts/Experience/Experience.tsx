import './Experience.css'
import { StyledList } from '@components/StyledList/StyledList'
import { Subtitle } from '@components/Subtitle/Subtitle'
import { experience } from '@data/app.data'
import React, { FC } from 'react'

export const Experience: FC = () => {
  return (
    <section className="experience">
      <Subtitle subtitle="experience" />
      <StyledList data={experience} className="experience__styled-list" />
    </section>
  )
}
