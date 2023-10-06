import { useToggleTheme } from './hooks/useToggleTheme.ts'
import { SwitchTheme } from '@components/molecules/switch-theme'
import { InputTodo } from '@components/molecules/input-todo'
import { Filters } from '@components/molecules/filters'
import { TodoList } from '@components/organism/todo-list'
import { BgImageContainer, HeaderStyled, MainStyled, TodoSectionStyled } from './app.styled.tsx'

function App () {
  const { handleToggleTheme } = useToggleTheme()
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
          <TodoList/>
        </TodoSectionStyled>
        <Filters/>
        <p>Drag and drop to reorder list</p>
      </MainStyled>
    </>
  )
}

export default App
