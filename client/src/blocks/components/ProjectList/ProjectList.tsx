import './ProjectList.css'
import { TProjectListData } from '@tps/app.types'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  className: string
  data: TProjectListData
}

export const ProjectList: FC<IProps> = ({ data, className }) => {
  return (
    <div className={cn('project-list', className)}>
      <div className="project-list__in">
        <h1 className="project-list__title">{data.title}</h1>
      </div>
      <ul className="project-list__list">
        {data.list.map((itm, indx) => (
          <li key={indx} className="project-list__item">
            <span>{`0${indx + 1} `}</span>
            {itm.item}
            <p className="project-list__item-description">{itm.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
