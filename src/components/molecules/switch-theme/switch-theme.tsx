import { SwitchThemeStyled } from '@components/molecules/switch-theme/switch-theme.styled.tsx'
import { useToggleModeStore } from '@store/toggle-mode.store.ts'
import { MoonIcon, SunIcon } from '@components/atoms/icons'

interface SwitchThemeProps {
  handleToggleTheme: () => void
}

export function SwitchTheme (props: SwitchThemeProps) {
  const { handleToggleTheme } = props
  const { theme } = useToggleModeStore()

  return (
    <SwitchThemeStyled data-testid='btn-theme-toggle' id='theme-toggle' onClick={handleToggleTheme}>
      {
        theme === 'dark'
          ? <SunIcon/>
          : <MoonIcon/>
      }
    </SwitchThemeStyled>
  )
}
