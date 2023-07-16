import React from 'react'
import { TSelectedColorSchemas } from '../@types/types'
import * as utls from '../utils/themeSwitcher.utils'

const matchMedia = window.matchMedia('(prefers-color-scheme:dark)')

export const useColorScheme = (): [
  colorScheme: TSelectedColorSchemas,
  setColorScheme: React.Dispatch<TSelectedColorSchemas>,
] => {
  const [colorScheme, setColorScheme] = React.useState<TSelectedColorSchemas>(utls.getSavedScheme() || 'auto')

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
