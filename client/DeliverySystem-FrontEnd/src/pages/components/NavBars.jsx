import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export const NavBars = () => {
  return (
    <React.Fragment>
      <Navbar
      color='black'
        bg="light"
        variant="light"
        expand="md"
        style={{ display: "flex" }}
      >
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};
