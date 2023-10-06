import { ButtonStyled } from '@components/atoms/button/button.styled.tsx'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}
export function Button (props: Props) {
  const { children, ...rest } = props

  return (
    <>
      <ButtonStyled {...rest}>
        {children}
      </ButtonStyled>
    </>
  )
}
