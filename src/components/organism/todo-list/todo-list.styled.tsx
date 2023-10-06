import styled from 'styled-components'

export const TodoListStyled = styled.ul`
  margin-top: 1rem;
  border-top-left-radius: var(--rounded);
  border-top-right-radius: var(--rounded);
  overflow: hidden;
  
  li {
    border-bottom: 1px solid var(--bg-todo-btn);
  }
  
  
  @media (min-width: 768px) {
    margin-top: 1.5rem;
  }
`
