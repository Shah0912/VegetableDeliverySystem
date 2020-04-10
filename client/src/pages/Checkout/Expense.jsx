import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { CartContext } from "../listings/ProductContext";

const Expense = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h3>Total Expense</h3>
      <ListGroup variant="flush">
        {cartItems.map((cartItem) => (
          <ListGroup.Item variant="light">
            <span>{cartItem.price}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="info" style={{ width: "100%" }}>
        Place Order
      </Button>
    </div>
  );
};

export default Expense;
