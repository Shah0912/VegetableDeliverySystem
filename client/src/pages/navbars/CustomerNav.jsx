import React, { useContext } from "react";
import { CartContext } from "../listings/ProductContext";
import { Navbar, Nav, Badge } from "react-bootstrap";
const CustomerNav = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <React.Fragment>
      <Navbar
        bg="light"
        variant="light"
        expand="md"
        style={{ display: "flex" }}
      >
        <Navbar.Brand href="/listing">Delivery App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/checkout">
              MyCart <Badge variant="dark">{cartItems.length}</Badge>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/">LogOut</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default CustomerNav;
