import {
  FilterClearStyled,
  FilterItemsStyled,
  FiltersContainerStyled,
  FiltersStyled, FilterStyledContent
} from '@components/molecules/filters/filters.styled.tsx'
import { Button } from '@components/atoms/button'

export function Filters () {
  return (
    <>
      <FiltersStyled>
        <FilterStyledContent>
          <FilterItemsStyled>5 items left</FilterItemsStyled>
          <FiltersContainerStyled>
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
          </FiltersContainerStyled>
          <FilterClearStyled>Clear Completed</FilterClearStyled>
        </FilterStyledContent>
      </FiltersStyled>
    </>
  )
}
