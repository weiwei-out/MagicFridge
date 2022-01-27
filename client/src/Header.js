import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Fridge App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Items">
              Items
            </Nav.Link>
            <Nav.Link as={Link} to="/Receipts">
              TEST
            </Nav.Link>
            <Nav.Link as={Link} to="/Groceries">
              Add Groceries
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
