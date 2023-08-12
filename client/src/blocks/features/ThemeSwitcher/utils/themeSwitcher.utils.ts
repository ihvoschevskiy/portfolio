import type { TSavedColorSchema } from '../types/types'

const COLOR_SCHEME_KEY = 'ih_portfolio:scheme'

export function applayScheme(scheme: TSavedColorSchema): void {
  document.documentElement.setAttribute('scheme', scheme)
}

export function saveScheme(scheme: TSavedColorSchema): void {
  localStorage.setItem(COLOR_SCHEME_KEY, scheme)
}

export function getSystemScheme(): TSavedColorSchema {
  return window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'
}

export function getSavedScheme(): TSavedColorSchema | null {
  return localStorage.getItem(COLOR_SCHEME_KEY) as TSavedColorSchema | null
}

export function removeSavedScheme(): void {
  localStorage.removeItem(COLOR_SCHEME_KEY)
}
