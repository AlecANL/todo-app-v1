import { useToggleTheme } from './hooks/useToggleTheme.ts'
import { BgImageContainer } from './app.styled.tsx'

function App () {
  const { handleToggleTheme } = useToggleTheme()
  return (
    <>
      <BgImageContainer className='bg-image'></BgImageContainer>
      <button id='theme-toggle' onClick={handleToggleTheme}>Change theme</button>
    </>
  )
}

export default App
