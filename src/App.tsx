import { useToggleTheme } from './hooks/useToggleTheme.ts'
import { SwitchTheme } from '@components/molecules/switch-theme'
import { InputTodo } from '@components/molecules/input-todo'
import { Filters } from '@components/molecules/filters'
import { TodoList } from '@components/organism/todo-list'
import { useFilter } from '@hooks/useFilter.ts'
import { BgImageContainer, HeaderStyled, MainStyled, ParagraphStyled, TodoSectionStyled } from './app.styled.tsx'

function App () {
  const { handleToggleTheme } = useToggleTheme()
  const { todosFiltered, length, handleChangeFilter, filter } = useFilter()

  /*
  * [✅] -> Refactor code
  * [✅] -> refactor styles
  * [] -> add framer motion
  * [✅] -> refactor drag and drop
  * [] -> add fonts
  * [] -> add images if not have todos
  * [] -> add tests
  * */

  return (
    <>
      <BgImageContainer className='bg-image'></BgImageContainer>
      <MainStyled>
        <HeaderStyled>
          <h1>todo</h1>
          <SwitchTheme handleToggleTheme={handleToggleTheme} />
        </HeaderStyled>
        <TodoSectionStyled>
          <InputTodo/>
          <TodoList
            todos={todosFiltered}
          />
        </TodoSectionStyled>
        <Filters
          currentFilter={filter}
          handleChangeFilter={handleChangeFilter}
        />
        {
          length > 0
            ? (
              <ParagraphStyled>Drag and drop to reorder list</ParagraphStyled>
              )
            : null
        }
      </MainStyled>
    </>
  )
}

export default App
