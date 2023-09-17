import { TLayout } from '@tps/app.types'
import throttle from 'lodash.throttle'
import React from 'react'

const getLayout = (): TLayout => {
  const breakPoint = Number(process.env.LAYOUT_BREAK_POINT) || 1024
  return document.body.clientWidth < breakPoint ? 'mobile' : 'desktop'
}

export const useAdaptive = (): TLayout => {
  const [layout, setLayout] = React.useState<TLayout>(getLayout())

  const handleResize = throttle(() => {
    setLayout(getLayout)
  }, 100)

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return layout
}
