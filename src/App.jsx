import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Cart from './pages/Cart'

function App() {
  const { state } = useContext(AppContext)

  return (
    <div className={state.theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App