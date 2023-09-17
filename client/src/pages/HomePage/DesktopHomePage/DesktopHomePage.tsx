import './DesktopHomePage.css'
import { Caption } from '@components/Caption/Caption'
import { ProjectNavigation } from '@components/ProjectNavigation/ProjectNavigation'
import { Title } from '@components/Title/Title'
import { Footer } from '@layouts/Footer/Footer'
import { Header } from '@layouts/Header/Header'
import { TProjectData } from '@tps/app.types'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  data: TProjectData[]
  className: string
}

export const DesktopHomePage: FC<IProps> = ({ data, className }) => {
  return (
    <div className={cn('home-d', 'container', className)}>
      <Header type="long" />
      <main className="home-d__main">
        <Title className="home-d__title" />
        <div className="home-d__in grid">
          <Caption modifier="medium" className="home-d__caption-wr" />
          <ProjectNavigation data={data} className="home-d__project-navigation-wr" />
        </div>
      </main>
      <Footer className="home-d__footer" />
    </div>
  )
}
