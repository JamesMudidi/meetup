import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'



class HeaderMain extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Questioner</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#"></Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#Login">Login</Nav.Link>
                    <Nav.Link href="#Login">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
}

export default HeaderMain;