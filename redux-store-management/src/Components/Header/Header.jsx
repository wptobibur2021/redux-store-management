import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{ marginBottom: '100px' }}>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
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