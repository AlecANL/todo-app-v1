import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from '@/App.tsx'

describe('Filters', async () => {
  afterEach(cleanup)
  beforeEach(() => {
    render(<App />)
  })

  it('Should clear complete todos', async () => {
    const inputTodo = screen.getByRole('textbox', { name: /input-todo/i })
    const form = screen.getByRole('form', { name: /form/i })
    fireEvent.change(inputTodo, { target: { value: 'create new todo from test 1' } })
    fireEvent.submit(form)
    fireEvent.change(inputTodo, { target: { value: 'create new todo from test 2' } })
    fireEvent.submit(form)

    const getTodo = await screen.findAllByText(/create new todo from test 1/)
    fireEvent.click(getTodo[0])

    const clearButton = screen.getByRole('button', { name: /clear/i })
    fireEvent.click(clearButton)

    const items = await screen.findAllByText(/create new todo/)
    expect(items.length).toBe(1)
  })

  it('Should delete a selected todo', async () => {
    const inputForDeleteTodos = screen.getByRole('textbox', { name: /input-todo/i })
    const formForDeleteTodos = screen.getByRole('form', { name: /form/i })
    fireEvent.change(inputForDeleteTodos, { target: { value: 'create new todo from test 1' } })
    fireEvent.submit(formForDeleteTodos)
    fireEvent.change(inputForDeleteTodos, { target: { value: 'create new todo from test 2' } })
    fireEvent.submit(formForDeleteTodos)

    const getTodo = await screen.findAllByRole('button', { name: /remove-todo/i })
    fireEvent.click(getTodo[0])

    const items = await screen.findAllByText(/create new todo/)
    expect(items.length).toBe(2)
  })
})
