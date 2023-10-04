import { useToggleModeStore } from '../store/toggle-mode.store.ts'
import { useEffect } from 'react'

export function useToggleTheme () {
  const {
    setColorPreferenceInDocument,
    syncColorPreference,
    theme,
    toggleTheme,
    setInitialTheme
  } = useToggleModeStore()

  useEffect(() => {
    setInitialTheme()
  }, [])

  useEffect(() => {
    setColorPreferenceInDocument()
  }, [theme])

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncColorPreference)

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', syncColorPreference)
    }
  }, [theme])

  const handleToggleTheme = () => {
    toggleTheme()
  }

  return {
    handleToggleTheme
  }
}
