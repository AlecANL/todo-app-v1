import styled from 'styled-components'

export const InputTodoFormStyled = styled.form`
  inline-size: 100%;
  min-block-size: var(--item-max-block-size);
  display: flex;
  gap: .5rem;
  background-color: var(--bg-todo-item);
  border-radius: var(--rounded);
  overflow: hidden;
  padding-inline: 20px;
  box-shadow: var(--box-shadow);
`
export const InputTodoStyled = styled.input`
  border-color: transparent;
  background-color: var(--bg-todo-item);
  width: 100%;
`

export const InputTodoLabelStyled = styled.label`
  display: inline-block;
  inline-size: var(--btn-todo-size);
  block-size: var(--btn-todo-size);
  border: 1px solid var(--bg-todo-btn);
  align-self: center;
  border-radius: 100%;
  aspect-ratio: 1;
`
