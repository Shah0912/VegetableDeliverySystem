import React, { useState, useContext } from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";
import { OrderContext } from "./FarmerContext";

export default function Order({ order }) {
  const [lgShow, setLgShow] = useState(false);
  const { orderComplete } = useContext(OrderContext);
  const onSubmit = (e) => {
    e.preventDefault();
    orderComplete(order);
  };
  return (
    <div>
      <li className="li-item" onClick={() => setLgShow(true)}>
        Order No. {order.orderid}
        <button className="delete-btn">+</button>
      </li>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Order No. {order.orderid}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Order Contents: </ListGroup.Item>
            <ListGroup.Item>
              Delivery Person Name: {order.deliveryPersonName}
            </ListGroup.Item>
            <ListGroup.Item>Total Cost: {order.amount}</ListGroup.Item>
          </ListGroup>
          <Button variant="success" size="lg" onClick={onSubmit}>
            Order Ready
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
