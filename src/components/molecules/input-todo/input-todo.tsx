import {
  InputTodoFormStyled,
  InputTodoLabelStyled,
  InputTodoStyled
} from '@components/molecules/input-todo/input-todo.styled.tsx'

export function InputTodo () {
  return (
    <>
      <InputTodoFormStyled>
        <InputTodoLabelStyled id='text'></InputTodoLabelStyled>
        <InputTodoStyled type='text' placeholder='Create a new todo...' />
      </InputTodoFormStyled>
    </>
  )
}
