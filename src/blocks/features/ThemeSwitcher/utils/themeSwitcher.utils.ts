import type { TSavedColorSchemas } from '../@types/types'

const COLOR_SCHEME_KEY = 'ih_portfolio:scheme'

export function applayScheme(scheme: TSavedColorSchemas): void {
  document.documentElement.setAttribute('scheme', scheme)
}

export function saveScheme(scheme: TSavedColorSchemas): void {
  localStorage.setItem(COLOR_SCHEME_KEY, scheme)
}

export function getSystemScheme(): TSavedColorSchemas {
  return window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'
}

export function getSavedScheme(): TSavedColorSchemas | null {
  return localStorage.getItem(COLOR_SCHEME_KEY) as TSavedColorSchemas | null
}

export function removeSavedScheme(): void {
  localStorage.removeItem(COLOR_SCHEME_KEY)
}
