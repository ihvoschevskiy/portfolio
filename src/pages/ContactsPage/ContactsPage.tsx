import './ContactsPage.css'
import { Caption } from '@components/Caption/Caption'
import { Script } from '@components/Script/Script'
import { Subtitle } from '@components/Subtitle/Subtitle'
import { FeedbackForm } from '@features/Feedback/components/FeedbackForm/FeedbackForm'
import { Header } from '@layouts/Header/Header'
import React, { FC } from 'react'

export const ContactsPage: FC = () => {
  return (
    <div className="about container">
      <Caption modifier="long" className="about__caption" />
      <Header type="short" />
      <main className="main contacts__in">
        <Script className="contacts__script" />
        <div className="contacts__form-wr">
          <Subtitle subtitle="Contact" />
          <FeedbackForm className="contacts__form" />
        </div>
      </main>
    </div>
  )
}
