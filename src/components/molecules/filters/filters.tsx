import {
  FilterClearStyled,
  FilterItemsStyled,
  FiltersContainerStyled,
  FiltersStyled, FilterStyledContent
} from '@components/molecules/filters/filters.styled.tsx'
import { Button } from '@components/atoms/button'
import { useTodoStore } from '@store/todo.store.ts'
import { type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  handleChangeFilter: (filter: string) => void
  currentFilter: string
}
export function Filters (props: Props) {
  const { length, clearCompletedTodos } = useTodoStore()
  const { handleChangeFilter, currentFilter } = props

  return (
    <>
      {
        length > 0
          ? (
            <FiltersStyled aria-label='filters-section'>
              <FilterStyledContent>
                <FilterItemsStyled>{length} items left</FilterItemsStyled>
                <FiltersContainerStyled aria-label='filter-button-section' className={currentFilter ? `filter-${currentFilter}` : ''}>
                  <Button id='all' onClick={() => { handleChangeFilter('all') }}>All</Button>
                  <Button id='active' onClick={() => { handleChangeFilter('active') }}>Active</Button>
                  <Button aria-label='completed-filter' id='completed' onClick={() => { handleChangeFilter('completed') }}>Completed</Button>
                </FiltersContainerStyled>
                <FilterClearStyled onClick={clearCompletedTodos}>Clear Completed</FilterClearStyled>
              </FilterStyledContent>
            </FiltersStyled>
            )
          : null
      }
    </>
  )
}
