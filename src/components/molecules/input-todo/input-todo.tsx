import {
  InputTodoFormStyled,
  InputTodoLabelStyled,
  InputTodoStyled
} from '@components/molecules/input-todo/input-todo.styled.tsx'
import { type FormEvent, useRef } from 'react'
import { useTodoStore } from '@store/todo.store.ts'

export function InputTodo () {
  const inputRef = useRef<HTMLInputElement>(null)
  const { addTodo } = useTodoStore()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputRef.current?.value) return

    const { value } = inputRef.current
    addTodo({
      todo: value
    })
    inputRef.current.value = ''
  }

  return (
    <>
      <InputTodoFormStyled aria-label='form' onSubmit={onSubmit}>
        <InputTodoLabelStyled id='text'></InputTodoLabelStyled>
        <InputTodoStyled aria-label='input-todo' ref={inputRef} type='text' placeholder='Create a new todo...' />
      </InputTodoFormStyled>
    </>
  )
}
