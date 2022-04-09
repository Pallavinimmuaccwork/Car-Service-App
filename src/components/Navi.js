import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navi = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SERVICES</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing">Prices</Nav.Link>
                            <NavDropdown title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item >
                                    <NavLink to="/Washing" className="Dreoptext">Washing</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink to="/Detailing" className="Dreoptext">Detail/ing</NavLink >
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink to="/Cleaning" className="Dreoptext">Cleanin/g</NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <NavLink to="/AddtoCart" className="text">Add to cart</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navi