import './PageNavigation.css'
import { ArrowIco } from '@components/Icons/ArrowIco'
import { HomeIco } from '@components/Icons/HomeIco'
import cn from 'classnames'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  className?: string
  next: string
  previous: string
}

export const PageNavigation: FC<IProps> = ({ next, previous, className }) => {
  return (
    <div className={cn('page-navigation', className)}>
      <Link to={previous}>
        <ArrowIco className="page-navigation__arrow" modifier="left" />
      </Link>
      <Link to="/">
        <HomeIco className="page-navigation__home" />
      </Link>
      <Link to={next}>
        <ArrowIco className="page-navigation__arrow" modifier="right" />
      </Link>
    </div>
  )
}
