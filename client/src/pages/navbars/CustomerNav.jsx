import React, { useContext } from "react";
import { CartContext } from "../listings/ProductContext";
import { Navbar, Nav, Badge, NavDropdown } from "react-bootstrap";
const CustomerNav = ({ id }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <React.Fragment>
      <Navbar
        bg="light"
        variant="light"
        expand="md"
        style={{ display: "flex" }}
      >
        <Navbar.Brand href="/listing">Aapka APMC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={"/checkout?id=" + id}>
              MyCart <Badge variant="dark">{cartItems.length}</Badge>
            </Nav.Link>
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

export default CustomerNav;
