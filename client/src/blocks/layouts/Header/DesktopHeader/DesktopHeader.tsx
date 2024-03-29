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
    <header className={cn('header', `header--${type}`, 'grid', className)}>
      {type === 'long' && <Logo />}
      <div className="header-desktop__controllers">
        <ThemeSwitcher className="header-desktop__layout-switcher" />
        <HeaderNavigation />
      </div>
    </header>
  )
}
