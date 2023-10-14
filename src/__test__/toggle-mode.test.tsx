import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from '@/App.tsx'

describe('Test For Toggle Button Theme', async () => {
  afterEach(cleanup)

  beforeEach(() => {
    render(<App />)
  })

  it('Should change theme to dark', async () => {
    const button = screen.getByTestId('btn-theme-toggle')
    fireEvent.click(button)

    const buttonChangeTheme = screen.getByRole('button', { name: /dark/i })
    expect(buttonChangeTheme).toBeInTheDocument()
  })
})
