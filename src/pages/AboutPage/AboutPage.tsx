import './AboutPage.css'
import { Caption } from '@components/Caption/Caption'
import React, { FC } from 'react'

export const AboutPage: FC = () => {
  return (
    <div className="about container">
      <div className="profile"></div>
      <Caption modifier="long" className="about__caption-wr" />
      <div className="stack"></div>
    </div>
  )
}
