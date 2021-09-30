import React from "react"
// import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import LoginModal from "./LoginModal"
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
    <Navbar bg="dark" expand="lg" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand href="#">OmniConnx</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#prof">profileTest</Nav.Link>
            <Nav.Link href="#posts">Posts</Nav.Link>
          </Nav>
          <Nav>
            <LoginModal />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
