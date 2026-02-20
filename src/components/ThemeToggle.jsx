import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Button } from 'react-bootstrap'

function ThemeToggle() {
  const { state, dispatch } = useContext(AppContext)

  return (
    <Button
      variant="secondary"
      onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
    >
      {state.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  )
}

export default ThemeToggle