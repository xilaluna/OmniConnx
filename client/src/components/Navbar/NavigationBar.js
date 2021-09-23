import React from "react"
// import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import "./navbar.css"

function NavigationBar() {
  return (
    // <div className="navbar">
    //   <div>
    //     <NavLink to="/">OmniConnx</NavLink>
    //   </div>
    //   <div>
    //     <NavLink to="/prof">profileTest</NavLink>
    //     <NavLink to="/posts">Posts</NavLink>
    //   </div>
    // </div>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">OmniConnx</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
