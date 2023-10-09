import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from '@/App.tsx'

describe('Filters', async () => {
  afterEach(cleanup)
  beforeEach(() => {
    render(<App />)
  })

  it('Should not render a filters if not have todos', async () => {
    const filters = screen.queryByLabelText('filters-section')
    expect(filters).not.toBeInTheDocument()
  })

  it('should render a filters section if have minimum a single one todo', async () => {
    const input = screen.getByRole('textbox', { name: /input-todo/i })
    const form = screen.getByRole('form', { name: /form/i })
    fireEvent.change(input, { target: { value: 'create new todo from test 1' } })
    fireEvent.submit(form)

    const filters = screen.queryByLabelText('filters-section')
    expect(filters).toBeInTheDocument()
  })

  it('Should show all todos if filter is all', async () => {
    const input = screen.getByRole('textbox', { name: /input-todo/i })
    const form = screen.getByRole('form', { name: /form/i })
    fireEvent.change(input, { target: { value: 'create new todo from test 1' } })
    fireEvent.submit(form)
    fireEvent.change(input, { target: { value: 'create new todo from test 2' } })
    fireEvent.submit(form)

    const allFilter = screen.getByRole('button', { name: /all/i })
    fireEvent.click(allFilter)

    const filterSection = screen.getByLabelText('filter-button-section')
    expect(filterSection).toHaveClass('filter-all')
  })

  it('Should show active todos if filter is completed', async () => {
    const form = screen.getByRole('form', { name: /form/i })
    const input = screen.getByRole('textbox', { name: /input-todo/i })
    fireEvent.change(input, { target: { value: 'create new todo from test 1' } })
    fireEvent.submit(form)
    fireEvent.change(input, { target: { value: 'create new todo from test 2' } })
    fireEvent.submit(form)
    const getTodo = await screen.findAllByText(/create new todo from test/)
    fireEvent.click(getTodo[0])

    const activeFilter = screen.getByRole('button', { name: /completed-filter/i })
    fireEvent.click(activeFilter)

    const filterSection = screen.getByLabelText('filter-button-section')
    expect(filterSection).toHaveClass('filter-completed')
  })
})
