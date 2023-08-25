import './HomePage.css'
import { Caption } from '@components/Caption/Caption'
import { ProjectNavigation } from '@components/ProjectNavigation/ProjectNavigation'
import { Title } from '@components/Title/Title'
import { Footer } from '@layouts/Footer/Footer'
import { Header } from '@layouts/Header/Header'
import { TProjectData } from '@tps/app.types'
import React, { FC } from 'react'

interface IProps {
  data: TProjectData[]
}

export const HomePage: FC<IProps> = ({ data }) => {
  return (
    <div className="home container">
      <Header type="long" />
      <main className="main">
        <Title className="home__title" />
        <div className="home__in grid">
          <Caption modifier="medium" className="home__caption-wr" />
          <ProjectNavigation data={data} className="home__project-navigation-wr" />
        </div>
      </main>
      <Footer className="home__footer" />
    </div>
  )
}
