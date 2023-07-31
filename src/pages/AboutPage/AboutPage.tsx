import './AboutPage.css'
import { Caption } from '@components/Caption/Caption'
import { Stack } from '@features/Stack/components/Stack/Stack'
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
        <Profile />
        <Profile />
        <Stack />
        <Profile />
      </main>
    </div>
  )
}
