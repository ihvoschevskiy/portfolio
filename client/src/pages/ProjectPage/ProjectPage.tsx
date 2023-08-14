import './ProjectPage.css'
import { Gallery } from '@components/Gallery/Gallery'
import { GitHubIco } from '@components/Icons/GitHubIco'
import { IHIco } from '@components/Icons/IHIco'
import { PageNavigation } from '@components/PageNavigation/PageNavigation'
import { SquareStack } from '@features/Stack/components/Stack/SquareStack'
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage'
import { TProjectData } from '@tps/app.types'
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

interface IProps {
  data: TProjectData[]
}

export const ProjectPage: FC<IProps> = ({ data }) => {
  const { id }: { id?: string } = useParams()
  const [project, setProject] = React.useState<TProjectData | null>(null)

  React.useEffect(() => {
    if (!id) return
    const found = data.filter(itm => itm.slug === id)[0]
    setProject(found)
  }, [id])

  if (project)
    return (
      <div className="project container">
        <main className="main grid">
          <div className="project__content">
            <div className="project__in">
              <h1 className="project__title">
                <span className="project__index">{project.index}</span>
                {project.title}
              </h1>
              <SquareStack projectStack={project.stack} />
            </div>
            <div className="project__description">
              <p className="project__text">{project.description}</p>
              <ul className="project__list">
                {project.points.map((item, index) => (
                  <li className="project__point" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <PageNavigation next={project.next} previous={project.previous} className="project__page-navigation" />
          </div>
          <div className="project__links">
            <a href="#" className="project__link">
              <GitHubIco className="project__ico--large" />
            </a>
            <a href="#" className="project__link">
              <IHIco />
            </a>
          </div>
          <div className="project__gallery">
            <Gallery images={project.images} />
          </div>
        </main>
      </div>
    )
  return <NotFoundPage />
}
