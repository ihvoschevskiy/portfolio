import './ProjectPage.css'
import { PageNavigation } from '@components/PageNavigation/PageNavigation'
import React, { FC } from 'react'

interface IProps {
  data: any
}

export const ProjectPage: FC<IProps> = ({ data }) => {
  return (
    <div className="project container">
      <main className="main grid">
        <div className="project__content">
          <PageNavigation next={data.next} previous={data.previous} className="project__page-navigation" />
        </div>
        <div className="project__gallery"></div>
      </main>
    </div>
  )
}
