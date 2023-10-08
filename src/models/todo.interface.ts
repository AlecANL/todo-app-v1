import type React from 'react'

export interface Todo {
  id: string
  todo: string
  completed: boolean
}

export type TodoItem = Pick<Todo, 'todo'>
export type TodoId = Pick<Todo, 'id'>

export interface TodoStore {
  todos: Todo[]
  addTodo: (todo: TodoItem) => void
  deleteTodo: (todoId: TodoId) => void
  toggleTodo: (todoId: TodoId) => void
  setDragAndDropOrderTodos: (todos: Todo[]) => void
  clearCompletedTodos: () => void
  length: number
}

export interface ToggleTodoParameters {
  todoId: TodoId
  todos: Todo[]
}

export type DragAndDropEvent = React.DragEvent<HTMLLIElement>
