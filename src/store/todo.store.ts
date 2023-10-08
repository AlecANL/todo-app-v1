import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { type Todo, type TodoId, type TodoItem, type TodoStore } from '@models/todo.interface.ts'
import { buildTodo, clearCompletedTodos, toggleTodo } from '@/utils/todo.utils.ts'

export const useTodoStore = create<TodoStore>()(devtools(persist((set, get) => ({
  todos: [],
  length: 0,
  addTodo: (todo: TodoItem) => {
    const { todos } = get()
    const newTodo = buildTodo(todo)
    const newTodos = [...todos, newTodo]
    set({ todos: newTodos, length: newTodos.length }, false, 'ADD_TODO')
  },
  deleteTodo: (todoId: TodoId) => {
    const { todos } = get()
    const { id } = todoId
    const newTodos = todos.filter(todo => todo.id !== id)
    set({ todos: newTodos, length: newTodos.length }, false, 'DELETE_TODO')
  },
  toggleTodo: (todoId: TodoId) => {
    const { todos } = get()
    set({ todos: toggleTodo({ todoId, todos }) }, false, 'TOGGLE_TODO')
  },
  clearCompletedTodos: () => {
    const { todos } = get()
    const newTodos = clearCompletedTodos(todos)
    set({ todos: newTodos, length: newTodos.length }, false, 'CLEAR_COMPLETED_TODOS')
  },
  setDragAndDropOrderTodos: (todos: Todo[]) => {
    set({ todos }, false, 'SET_DRAG_AND_DROP_ORDER_TODOS')
  }

}), {
  name: 'todo-store'
})))
