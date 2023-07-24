import './ProjectNavigation.css'
import cn from 'classnames'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  className?: string
}

export const ProjectNavigation: FC<IProps> = ({ className }) => {
  return (
    <div className={cn('project-navigation', className)}>
      <ul className="project-navigation__list">
        {['Apps', 'Cli Tools', 'Websites'].map((item, index) => (
          <li className="project-navigation__item" key={index}>
            <Link to={`/`} className="project-navigation__link">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
