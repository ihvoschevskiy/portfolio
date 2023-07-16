import './Header.css'
import { Logo } from '@components/Icons/Logo'
import { Navigation } from '@components/Navigation/Navigation'
import { ThemeSwitcher } from '@features/ThemeSwitcher/components/ThemeSwitcher'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const Header: FC = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <Logo classname="logo__image" color="var(--c-accent)" />
      </NavLink>
      <div className="controllers">
        <ThemeSwitcher />
      </div>
      <Navigation />
    </header>
  )
}
