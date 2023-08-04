import './Experience.css'
import { StyledList } from '@components/StyledList/StyledList'
import { Subtitle } from '@components/Subtitle/Subtitle'
import { TStyledListData } from '@tps/app.types'
import React, { FC } from 'react'

export const Experience: FC = () => {
  const data: TStyledListData[] = [
    {
      title: 'мебельный центр,',
      role: 'бухгалтер',
      list: [{ item: 'Организация и ведение бухгалтерского учета' }, { item: 'Автоматизация бизнес процессов' }],
    },
  ]
  return (
    <section className="experience">
      <Subtitle subtitle="experience" />
      <StyledList data={data} className="experience__styled-list" />
    </section>
  )
}
