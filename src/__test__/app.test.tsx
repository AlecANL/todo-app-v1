import { describe, it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from '@/App.tsx'

describe('App', async () => {
  afterEach(cleanup)

  it('Should print title app', async () => {
    render(<App />)
    const h1 = screen.queryByRole('heading', { name: /Todo/i })
    expect(h1).toBeInTheDocument()
  })

  it('Should render and input', async () => {
    render(<App />)
    const input = screen.getByRole('textbox', { name: /input-todo/i })
    expect(input).toBeInTheDocument()
  })

  it('Should render a text if not have todos', async () => {
    render(<App />)
    const text = screen.getByText(/There are no todos/i)
    expect(text).toBeInTheDocument()
  })
})
