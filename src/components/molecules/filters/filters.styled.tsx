import styled from 'styled-components'

export const FiltersStyled = styled.footer`
  position: relative;
  min-height: 114px;
  
  button {
    color: inherit;
  }
  
  @media (min-width: 768px) {
    box-shadow: var(--box-shadow);
    min-height: 50px;
  }
`

export const FilterStyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-todo-item);
  border-bottom-left-radius: var(--rounded);
  border-bottom-right-radius: var(--rounded);
`

export const FilterItemsStyled = styled.span`
  display: block;
  padding-block: 1rem;
  padding-inline: 1.2rem;

  @media (min-width: 768px) {
    flex-shrink: 0;
  }
`

export const FilterClearStyled = styled.button`
  padding-block: 1rem;
  padding-inline: 1.2rem;
  background-color: transparent;
  border-color: transparent;
  
  @media (min-width: 768px) {
    flex-shrink: 0;
  }
`

export const FiltersContainerStyled = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: var(--rounded);
  background-color: var(--bg-todo-item);
  inline-size: 100%;
  bottom: 0;
  box-shadow: var(--box-shadow);
  
  button {
    padding-block: 1rem;
    padding-inline: 1.2rem;
  }
  
  @media (min-width: 768px) {
    position: static;
    box-shadow: none;
  }
`
