import { useToggleTheme } from './hooks/useToggleTheme.ts'

function App () {
  const { handleToggleTheme } = useToggleTheme()
  return (
    <>
      <h1>Hello</h1>
      <button id='theme-toggle' onClick={handleToggleTheme}>Change theme</button>
    </>
  )
}

export default App
