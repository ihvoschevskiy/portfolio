import './Header.css'
import { HeaderNavigation } from '@components/HeaderNavigation/HeaderNavigation'
import { Logo } from '@components/Icons/Logo'
import { ThemeSwitcher } from '@features/ThemeSwitcher/components/ThemeSwitcher'
import cn from 'classnames'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface IProps {
  type: 'short' | 'long'
}

export const Header: FC<IProps> = ({ type }) => {
  return (
    <header className={cn('header', `header--${type}`, 'grid')}>
      {type === 'long' && (
        <NavLink tabIndex={-1} to="/" className="logo">
          <Logo classname="logo__image" color="var(--color-accent)" />
        </NavLink>
      )}
      <ThemeSwitcher className="header__controllers" />
      <HeaderNavigation />
    </header>
  )
}
