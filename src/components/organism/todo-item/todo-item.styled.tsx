import styled from 'styled-components'

export const TodoItemStyled = styled.li`
  position: relative;
  padding: 20px 25px;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: var(--bg-todo-item);
  color: inherit;
  font-size: var(--font-size);
  
  &.complete {
    text-decoration: line-through;
    color: var(--text-completed);
  }
  
  @media (min-width: 768px) {
    button {
      visibility: hidden;
    }
    
    &:hover button {
      visibility: visible;
    }
  }
  
  &.active {
    opacity: .5;
  }
`

export const TodoListLabelStyled = styled.label`
  flex: 1;
`

export const TodoListCheckBoxLabelStyled = styled.label`
  position: relative;
  inline-size: 1.5rem;
  block-size: 1.5rem;
  border-radius: 100%;
  background-color: var(--bg-todo-btn);
  
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    display: none;
    transform: translate(-50%, -50%);
  }

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    inline-size: 22px;
    block-size: 22px;
    background-color: var(--bg-todo-item);
    border-radius: 100%;
  }

  &:hover {
    background: linear-gradient( to bottom right, #55DDFF, #C058F3);
  }
`

export const TodoListCheckInputStyled = styled.input`
  position: absolute;
  min-height: 0;
  visibility: hidden;
  min-width: 0;
  
  &:checked + label {
    background: linear-gradient( to bottom right, #55DDFF, #C058F3);
  }
  
  &:checked + label:before {
    background-color: transparent;
  }
  
  &:checked + label svg {
    display: block;
  }
`
