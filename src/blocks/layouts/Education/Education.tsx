import './Education.css'
import { StyledList } from '@components/StyledList/StyledList'
import { Subtitle } from '@components/Subtitle/Subtitle'
import { TStyledListData } from '@tps/app.types'
import React, { FC } from 'react'

export const Education: FC = () => {
  const data: TStyledListData[] = [
    {
      title: 'courses',
      list: [{ item: 'Курс фронтенд-разработка / karpov.courses (2023)', link: 'https://karpov.courses/dev/frontend' }],
    },
    {
      title: 'university',
      list: [
        {
          item: 'Высшее образование по специальности бухгалтерский учет, анализ и аудит / ХГУ им. Н.Ф. Катанова г. Абакан (2006)',
        },
      ],
    },
  ]
  return (
    <section className="education">
      <Subtitle subtitle="education" />
      <StyledList data={data} className="education__styled-list" />
    </section>
  )
}
