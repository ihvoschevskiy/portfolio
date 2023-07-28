import './ThemeSwitcher.css'
import cn from 'classnames'
import React, { FC } from 'react'
import { useColorScheme } from '../hooks/useColorScheme'
import { AutoIco } from './AutoIco'
import { MoonIco } from './MoonIco'
import { SunIco } from './SunIco'

interface IProps {
  className?: string
}

export const ThemeSwitcher: FC<IProps> = ({ className }) => {
  const [colorScheme, setColorScheme] = useColorScheme()

  const onChangeScheme = () => {
    switch (colorScheme) {
      case 'auto':
        setColorScheme('light')
        break
      case 'light':
        setColorScheme('dark')
        break
      case 'dark':
        setColorScheme('auto')
        break
    }
  }

  return (
    <div className={cn('color-scheme-switcher', className)}>
      <button className="color-scheme-switcher__button" onClick={onChangeScheme}>
        {colorScheme === 'auto' && <AutoIco />}
        {colorScheme === 'dark' && <MoonIco />}
        {colorScheme === 'light' && <SunIco />}
      </button>
    </div>
  )
}
