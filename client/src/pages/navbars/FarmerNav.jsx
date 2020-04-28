import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const FarmerNav = ({ id }) => {
  return (
    <React.Fragment>
      <Navbar
        bg="light"
        variant="light"
        expand="md"
        style={{ display: "flex" }}
      >
        <Navbar.Brand href="#home">Aapka APMC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={"/farmer?id=" + id}>Dashboard</Nav.Link>
            <Nav.Link href={"/pages?id=" + id}>View All Crops</Nav.Link>
            <Nav.Link href={"/feedback?id=" + id}>Feedback</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title="Welcome Michael Scott!">
              <NavDropdown.Item href="/">LogOut</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};
export default FarmerNav;
