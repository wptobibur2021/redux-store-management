import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-menu" to="/">Home</Link>
            <Link className="nav-menu" to="/shop">Shop</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header