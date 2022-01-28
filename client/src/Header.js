import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark" className="justify-content-center"> */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" id="title">
            Flatiron Fridge
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Items" className="nav">
              Items
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/Receipts">
              TEST
            </Nav.Link> */}
            <Nav.Link as={Link} to="/Groceries" className="nav">
              Add Groceries
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
