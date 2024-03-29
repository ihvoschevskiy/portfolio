import React from 'react'
import { TSelectedColorSchema } from '../types/types'
import * as utls from '../utils/themeSwitcher.utils'

const matchMedia = window.matchMedia('(prefers-color-scheme:dark)')

export const useColorScheme = (): [
  colorScheme: TSelectedColorSchema,
  setColorScheme: React.Dispatch<TSelectedColorSchema>,
] => {
  const [colorScheme, setColorScheme] = React.useState<TSelectedColorSchema>(utls.getSavedScheme() || 'auto')

  const systemColorSchemeListener = () => {
    if (colorScheme === 'auto') utls.applayScheme(utls.getSystemScheme())
  }

  React.useEffect(() => {
    matchMedia.addEventListener('change', systemColorSchemeListener)

    if (colorScheme === 'auto') {
      utls.removeSavedScheme()
      utls.applayScheme(utls.getSystemScheme())
    } else {
      utls.applayScheme(colorScheme)
      utls.saveScheme(colorScheme)
    }

    return () => {
      matchMedia.removeEventListener('change', systemColorSchemeListener)
    }
  }, [colorScheme])

  return [colorScheme, setColorScheme]
}
