import React, { useState } from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";

export default function Pickup({ delivery }) {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <li
        className="li-item"
        onClick={() => setLgShow(true)}
        style={{ textDecoration: delivery.isPickedup ? "line-through" : "" }}
      >
        Pickup Number: {delivery.id} <button className="delete-btn">+</button>
      </li>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Pickup Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Pickup id: {delivery.id}</ListGroup.Item>
            <ListGroup.Item>
              Delivery Contents:
              {delivery.content.map(item => (
                <li>{item}</li>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>Farmer Name: {delivery.farmer_name}</ListGroup.Item>
            <ListGroup.Item>
              Pickup Address: {delivery.pickup_add}
            </ListGroup.Item>
            <ListGroup.Item>MAP WILL BE SHOWN HERE</ListGroup.Item>
          </ListGroup>

          <Button
            disabled={delivery.isPickedup}
            variant="success"
            size="lg"
            onClick={() => {
              delivery.isPickedup = true;
            }}
          >
            Pickup Complete
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
