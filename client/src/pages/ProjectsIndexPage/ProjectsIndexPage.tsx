import './ProjectsIndexPage.css'
import { ProjectList } from '@components/ProjectList/ProjectList'
import { projectsIndex } from '@data/app.data'
import { Header } from '@layouts/Header/Header'
import { TProjectListData } from '@tps/app.types'
import React, { FC } from 'react'

export const ProjectsIndexPage: FC = () => {
  const [activeSlideIndx, setActiveSlideIndx] = React.useState(0)
  const [slides, setSlides] = React.useState<TProjectListData[]>(projectsIndex.slice(0, 2))
  const [shift, setShift] = React.useState(0)
  const [transition, setTransition] = React.useState(true)

  const getActiveSlides = (indx: number, arr: TProjectListData[]): TProjectListData[] => {
    const resultArr = arr.slice(indx)
    if (resultArr.length < 2) resultArr.push(projectsIndex[0])
    if (resultArr.length > 2) return resultArr.slice(0, 2)

    return resultArr
  }

  React.useEffect(() => {
    if (!shift) return
    const timeout = setTimeout(() => {
      setSlides(getActiveSlides(activeSlideIndx, projectsIndex))
    }, 1000)

    return () => clearTimeout(timeout)
  }, [activeSlideIndx])

  React.useEffect(() => {
    if (!shift) return
    setShift(0)
    setTransition(false)
  }, [slides])

  return (
    <div className="projects container">
      <Header type="long" />
      <main className="projects__main grid">
        <div className="projects__in">
          <div
            className="slides"
            style={{
              transform: `translateY(${shift}%)`,
              transition: transition ? 'transform 1s' : 'none',
            }}
          >
            {slides.map((itm, indx) => (
              <div key={indx} className="slides__item">
                <ProjectList tabIndex={indx === 0 ? 0 : -1} data={itm} className="slides__project-list" />
                <button
                  tabIndex={indx === 0 ? 0 : -1}
                  style={{ opacity: shift ? '0%' : '100%' }}
                  className="slides__next"
                  onClick={() => {
                    setTransition(true)
                    const activeIdx = activeSlideIndx === projectsIndex.length - 1 ? 0 : activeSlideIndx + 1
                    setShift(-50)
                    setActiveSlideIndx(activeIdx)
                  }}
                >
                  {indx !== slides.length - 1 ? slides[indx + 1].title : slides[0].title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
