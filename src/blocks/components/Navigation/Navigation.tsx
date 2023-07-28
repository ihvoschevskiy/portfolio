import './Navigation.css'
import React, { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NAVIGATION_ITEMS = ['home', 'projects', 'about', 'contacts']

export const Navigation: FC = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {NAVIGATION_ITEMS.map((item, index) => (
          <li className="navigation__item" key={index}>
            <NavLink
              to={item === 'home' ? '/' : `/${item}`}
              className={({ isActive }) => {
                const { pathname } = useLocation()
                if (item === 'home' && pathname === '/') isActive === true
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
