import { useTodoStore } from '@store/todo.store.ts'
import { useState } from 'react'
import { filterTodos } from '@/utils/todo.utils.ts'

export function useFilter () {
  const { todos } = useTodoStore()

  const [filter, setFilter] = useState('all')

  const handleChangeFilter = (filter: string) => {
    setFilter(filter)
  }

  const todosFiltered = todos.filter(filterTodos[filter])

  return {
    todosFiltered,
    handleChangeFilter,
    length: todosFiltered.length,
    filter
  }
}
