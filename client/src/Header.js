import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark" className="justify-content-center"> */}
      <Navbar bg="dark" variant="dark">
        <Container id="title2">
          {/* <img src="Icons/fridgelogo.png" alt="" id="logo" />
          {/* <Navbar.Brand as={Link} to="/" id="title">
            FukGit Fridge
          </Navbar.Brand> */}
          <Link to="/">
            <img src="Icons/fridgelogo.png" alt="Logo" id="logo" />
          </Link>
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/" className="nav">
              Home
            </Nav.Link> */}
            <Nav.Link as={Link} to="/Items" className="nav">
              Items
            </Nav.Link>

            <Nav.Link as={Link} to="/Groceries" className="nav">
              Add Groceries
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/Game" className="nav">
              Play Game
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
