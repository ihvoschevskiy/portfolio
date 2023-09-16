import './Header.css'
import { HeaderNavigation } from '@components/HeaderNavigation/HeaderNavigation'
import { Logo } from '@components/Icons/Logo'
import { ThemeSwitcher } from '@features/ThemeSwitcher/components/ThemeSwitcher'
import cn from 'classnames'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface IProps {
  type: 'short' | 'long'
  className?: string
}

export const Header: FC<IProps> = ({ type, className }) => {
  return (
    <header className={cn('header', `header--${type}`, 'grid', className)}>
      {type === 'long' && (
        <NavLink tabIndex={-1} to="/" className="logo">
          <Logo classname="logo__image" color="var(--color-accent)" />
        </NavLink>
      )}
      <div className="header__controllers">
        <ThemeSwitcher className="header__layout-switcher" />
        <HeaderNavigation />
      </div>
    </header>
  )
}
