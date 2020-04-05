import React, { useState } from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";

export default function Delivery({ delivery }) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <li
        className="li-item"
        onClick={() => setLgShow(true)}
        style={{ textDecoration: delivery.isDelivered ? "line-through" : "" }}
      >
        Delivery to {delivery.cust_name}
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
            Delivery Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Delivery id: {delivery.id}</ListGroup.Item>
            <ListGroup.Item>
              Delivery Contents:{" "}
              {delivery.content.map(item => (
                <li>{item}</li>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>Customer Name: {delivery.cust_name}</ListGroup.Item>
            <ListGroup.Item>
              Delivery Address: {delivery.cust_add}
            </ListGroup.Item>
            <ListGroup.Item>MAP WILL BE SHOWN HERE</ListGroup.Item>
          </ListGroup>

          <Button
            disabled={delivery.isDelivered}
            variant="success"
            size="lg"
            onClick={() => {
              delivery.isDelivered = true;
            }}
          >
            Delivery Complete
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
