import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const DeliveryNav = ({ id }) => {
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
            <Nav.Link href={"/delivery?id=" + id}>Dashboard</Nav.Link>
            <Nav.Link href="/listing">Add Phone Number</Nav.Link>
            <Nav.Link href={"/Vdetails?id=" + id}>Add Vehicle Details</Nav.Link>
            <Nav.Link href={"/pageAllP?id=" + id}>View All Pickups</Nav.Link>
            <Nav.Link href={"/pageAllD?id=" + id}>View All Drops</Nav.Link>
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
export default DeliveryNav;
