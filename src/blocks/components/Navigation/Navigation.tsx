import './Navigation.css'
import React, { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const Navigation: FC = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {['projects', 'about', 'contacts'].map((item, index) => (
          <li className="navigation__item" key={index}>
            <NavLink
              to={`/${item}`}
              className={({ isActive }) => {
                const { pathname } = useLocation()
                if (pathname === `/${item}`) isActive = true
                return `navigation__link ${isActive ? 'navigation__link--active' : ''}`
              }}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
