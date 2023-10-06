import { TodoListStyled } from '@components/organism/todo-list/todo-list.styled.tsx'
import { TodoItem } from '@components/organism/todo-item'

export function TodoList () {
  return (
    <>
      <TodoListStyled>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>

      </TodoListStyled>
    </>
  )
}
