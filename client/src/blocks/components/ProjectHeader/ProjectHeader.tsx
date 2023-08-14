import './ProjectHeader.css'
import React, { FC } from 'react'

interface IProps {
  data: any
}

export const ProjectHeader: FC<IProps> = ({ data }) => {
  return (
    <div className="project-header">
      <span className="project-header__number">01</span>
      <h1 className="project-header__title">Github Users</h1>
      <div className="project-header__stack"></div>
    </div>
  )
}
