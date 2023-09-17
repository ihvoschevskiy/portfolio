import './Header.css'
import React, { FC, useContext } from 'react'
import { LayoutContext } from '../../../App'
import { DesktopHeader } from './DesktopHeader/DesktopHeader'
import { MobileHeader } from './MobileHeader/MobileHeader'

interface IProps {
  type: 'short' | 'long'
}

export const Header: FC<IProps> = ({ type }) => {
  const layout = useContext(LayoutContext)

  if (layout === 'mobile') return <MobileHeader className="header-mobile" />
  if (layout === 'desktop') return <DesktopHeader type={type} className="header-desktop" />
}
