import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Fridge App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Items" activeClassName="active">
              Items
            </Nav.Link>
            <Nav.Link as={Link} to="/Receipts" activeClassName="active">
              TEST
            </Nav.Link>
            <Nav.Link as={Link} to="/Groceries" activeClassName="active">
              Add Groceries
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
