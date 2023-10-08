import { type Todo, type TodoItem, type ToggleTodoParameters } from '@models/todo.interface.ts'

export const buildTodo = (todoItem: TodoItem): Todo => {
  const { todo } = todoItem

  return {
    id: generateRandomUid(),
    todo,
    completed: false
  } satisfies Todo
}

export const toggleTodo = (parameters: ToggleTodoParameters) => {
  const { todoId, todos } = parameters

  return todos.map(todo => {
    if (todo.id === todoId.id) {
      return {
        ...todo,
        completed: !todo.completed
      }
    }
    return todo
  })
}

export const generateRandomUid = () => {
  const timestamp = new Date().getTime()
  const randomValue = Math.random()
  return `${timestamp}_${randomValue}`
}

export const clearCompletedTodos = (todos: Todo[]) => {
  return todos.filter(todo => !todo.completed)
}

export const filterTodos: Record<string, (todo: Todo) => any> = {
  all: todo => todo,
  active: todo => !todo.completed,
  completed: todo => todo.completed
}
