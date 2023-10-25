import './AboutPage.css'
import { Caption } from '@components/Caption/Caption'
import { HexStack } from '@features/Stack/components/Stack/HexStack'
import { Education } from '@layouts/Education/Education'
import { Experience } from '@layouts/Experience/Experience'
import { Header } from '@layouts/Header/Header'
import { Profile } from '@layouts/Profile/Profile'
import React, { FC } from 'react'

export const AboutPage: FC = () => {
  return (
    <div className="about container">
      <Caption modifier="long" className="about__caption" />
      <Header type="short" />
      <main className="main about__in">
        <Profile className="about__item" />
        <Experience className="about__item" />
        <HexStack className="about__item" />
        <Education className="about__item" />
      </main>
    </div>
  )
}
