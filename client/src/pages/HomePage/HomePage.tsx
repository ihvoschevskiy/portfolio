import './HomePage.css'
import { Caption } from '@components/Caption/Caption'
import { ProjectNavigation } from '@components/ProjectNavigation/ProjectNavigation'
import { Title } from '@components/Title/Title'
import { Footer } from '@layouts/Footer/Footer'
import { Header } from '@layouts/Header/Header'
import React, { FC } from 'react'

export const HomePage: FC = () => {
  return (
    <div className="home container">
      <Header type="long" />
      <main className="main">
        <Title />
        <div className="home__in grid">
          <Caption modifier="medium" className="home__caption-wr" />
          <ProjectNavigation className="home__project-navigation-wr" />
        </div>
      </main>
      <Footer className="home__footer" />
    </div>
  )
}
