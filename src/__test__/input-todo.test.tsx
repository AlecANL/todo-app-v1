import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from '@/App.tsx'

describe('Input Todo', async () => {
  afterEach(cleanup)

  it('should input contain value: create a todo', async () => {
    render(<App />)
    const input = screen.getByRole('textbox', { name: /input-todo/i })
    fireEvent.change(input, { target: { value: 'create a todo' } })
    expect(input).toHaveValue('create a todo')
  })

  it('Should create a new todo', async () => {
    render(<App />)
    const input = screen.getByRole('textbox', { name: /input-todo/i })
    const form = screen.getByRole('form', { name: /form/i })
    fireEvent.change(input, { target: { value: 'create new todo from test 1' } })
    fireEvent.submit(form)

    const text = screen.getByText(/create new todo from test 1/i)
    expect(text).toBeInTheDocument()
  })
})
