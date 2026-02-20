import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ThemeToggle from './ThemeToggle'

function NavigationBar() {
  const { state } = useContext(AppContext)

  return (
    <Navbar
      bg={state.theme === 'dark' ? 'dark' : 'light'}
      variant={state.theme === 'dark' ? 'dark' : 'light'}
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">SkillBoost</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
          <ThemeToggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar