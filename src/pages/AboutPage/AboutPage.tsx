import './AboutPage.css'
import { Caption } from '@components/Caption/Caption'
import { Header } from '@layouts/Header/Header'
import React, { FC } from 'react'

export const AboutPage: FC = () => {
  return (
    <div className="about container">
      <Caption modifier="long" className="about__caption-wr" />
      <Header type="short" />
      <div className="profile"></div>
      <div className="stack"></div>
    </div>
  )
}
