import './Logo.css'
import { LogoIco } from '@components/Icons/LogoIco'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const Logo: FC = () => {
  return (
    <div className="logo">
      <NavLink tabIndex={-1} to="/" className="logo__link">
        <LogoIco classname="logo__image" />
      </NavLink>
    </div>
  )
}
