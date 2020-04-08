import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
const FarmerNav = () => {
  return (
    <React.Fragment>
      <Navbar
        bg="light"
        variant="light"
        expand="md"
        style={{ display: "flex" }}
      >
        <Navbar.Brand href="#home">Delivery App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="/listing">Add Phone Number</Nav.Link>
            <Nav.Link>Feedback</Nav.Link>
            <Nav.Link href="#pricing">Log-Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};
export default FarmerNav;
