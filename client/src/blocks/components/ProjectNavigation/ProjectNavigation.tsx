import './ProjectNavigation.css'
import { TProjectData } from '@tps/app.types'
import cn from 'classnames'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { LayoutContext } from '../../../App'

interface IProps {
  data: TProjectData[]
  className?: string
}

export const ProjectNavigation: FC<IProps> = ({ data, className }) => {
  const [categories, setCategories] = React.useState<string[]>([])
  const [links, setLinks] = React.useState<string[]>([])
  const layout = React.useContext(LayoutContext)

  React.useEffect(() => {
    setCategories(data.map(item => item.category).filter((item, index, arr) => arr.indexOf(item) === index))
  }, [])

  React.useEffect(() => {
    setLinks(categories.map(item => data.find(itm => itm.category === item)).map(item => item?.slug) as string[])
  }, [categories])

  return (
    <div className={cn('project-navigation', className)}>
      <ul className="project-navigation__list">
        {categories.map((item, index) => (
          <li className="project-navigation__item" key={index}>
            <Link to={layout === 'desktop' ? `/projects/${links[index]}` : ''} className="project-navigation__link">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
