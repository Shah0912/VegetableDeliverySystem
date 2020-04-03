import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const Expense = () => {
  return (
    <div>
      <h3>Total Expense</h3>
      {/* <ul id="list" className="list">
        <li>
          <span>First</span>
        </li>
        <li>
          <span>First</span>
        </li>
        <li>
          <span>First</span>
        </li>
        <li>
          <span>First</span>
        </li>
      </ul> */}
      <ListGroup variant="flush">
        <ListGroup.Item variant="light">
          <span>First</span>
        </ListGroup.Item>
        <ListGroup.Item variant="light">
          <span>First</span>
        </ListGroup.Item>
        <ListGroup.Item variant="light">
          <span>First</span>
        </ListGroup.Item>
        <ListGroup.Item variant="light">
          <span>First</span>
        </ListGroup.Item>
      </ListGroup>
      <Button variant="info" style={{ width: "100%" }}>
        Place Order
      </Button>
    </div>
  );
};

export default Expense;
