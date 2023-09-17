import './DesktopHeader.css'
import { HeaderNavigation } from '@components/HeaderNavigation/HeaderNavigation'
import { Logo } from '@components/Logo/Logo'
import { ThemeSwitcher } from '@features/ThemeSwitcher/components/ThemeSwitcher'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  type: 'short' | 'long'
  className?: string
}

export const DesktopHeader: FC<IProps> = ({ type, className }) => {
  return (
    <header className={cn('header-d', `header--${type}`, 'grid', className)}>
      {type === 'long' && <Logo />}
      <div className="header-d__controllers">
        <ThemeSwitcher className="header-d__layout-switcher" />
        <HeaderNavigation />
      </div>
    </header>
  )
}
