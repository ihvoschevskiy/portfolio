import './ProjectPage.css'
import { GitHubIco } from '@components/Icons/GitHubIco'
import { IHIco } from '@components/Icons/IHIco'
import { PageNavigation } from '@components/PageNavigation/PageNavigation'
import { Slider } from '@components/Slider/Slider'
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
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    if (!id) return
    setIsLoading(true)
    const found = data.filter(itm => itm.slug === id)[0]
    setProject(found)
    setIsLoading(false)
  }, [id])

  if (isLoading) return <></>

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
          </div>
          <div className="project__gallery">
            <Slider images={project.images} />
          </div>
        </main>
        <div className="project__footer">
          <PageNavigation next={project.next} previous={project.previous} className="project__page-navigation" />
          <div className="project__links">
            <a href={project.github_url} target="_blank" className="project__link" rel="noreferrer">
              <GitHubIco className="project__ico--large" />
            </a>
            <a href={project.website_url} target="_blank" className="project__link" rel="noreferrer">
              <IHIco className="project__ico--large" />
            </a>
          </div>
        </div>
      </div>
    )
  return <NotFoundPage />
}
