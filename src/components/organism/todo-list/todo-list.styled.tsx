import styled from 'styled-components'

export const TodoListStyled = styled.ul`
  margin-top: 1rem;
  border-top-left-radius: var(--rounded);
  border-top-right-radius: var(--rounded);
  overflow: hidden;
  
  li {
    border-bottom: 1px solid var(--bg-todo-btn);
  }
  
  .empty {
    background-color: var(--bg-todo-item);
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    box-shadow: var(--box-shadow);
  }
  

  
  
  @media (min-width: 768px) {
    margin-top: 1.5rem;
  }
`
