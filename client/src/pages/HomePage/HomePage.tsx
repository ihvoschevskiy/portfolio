import { TProjectData } from '@tps/app.types'
import React, { FC, useContext } from 'react'
import { LayoutContext } from '../../App'
import { DesktopHomePage } from './DesktopHomePage/DesktopHomePage'
import { MobileHomePage } from './MobileHomePage/MobileHomePage'

interface IProps {
  data: TProjectData[]
}

export const HomePage: FC<IProps> = ({ data }) => {
  const layout = useContext(LayoutContext)

  if (layout === 'desktop') return <DesktopHomePage data={data} className="home" />
  if (layout === 'mobile') return <MobileHomePage data={data} className="home" />
}
