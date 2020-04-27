import React, { useContext, useState, useEffect } from "react";
import { Modal, ListGroup, Button, Jumbotron } from "react-bootstrap";
import { PickupContext, DeliveryContext } from "./DeliveryContext";
import Maps from "./Maps";

export default function Pickup({ pickup }) {
  const { isPickedup } = useContext(PickupContext);
  const { addDelivery } = useContext(DeliveryContext);
  const [lgShow, setLgShow] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    isPickedup(pickup);
    addDelivery(pickup);
    pickup.isPickedup = true;
    setLgShow(false);
  };
  return (
    <div>
      <li
        className="li-item"
        onClick={() => setLgShow(true)}
        style={{ textDecoration: pickup.isPickedup ? "line-through" : "" }}
      >
        Pickup Number: {pickup.id} <button className="delete-btn">+</button>
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
            <ListGroup.Item>Pickup id: {pickup.id}</ListGroup.Item>
            <ListGroup.Item>
              Delivery Contents:
              {pickup.content.map((item) => (
                <li>{item}</li>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>Farmer Name: {pickup.farmer_name}</ListGroup.Item>
            <ListGroup.Item>Pickup Address: {pickup.pickup_add}</ListGroup.Item>
          </ListGroup>
          <Button
            disabled={pickup.isPickedup}
            variant="success"
            size="lg"
            //onClick={onSubmit}
            href="delivery/maps"
            style={{
              width: "50%",
              margin: "auto",
              marginTop: "15px",
              paddingRight: "2px",
            }}
          >
            View Map
          </Button>
          <Button
            disabled={pickup.isPickedup}
            variant="success"
            size="lg"
            onClick={onSubmit}
            style={{ width: "50%", margin: "auto", marginTop: "15px" }}
          >
            Pickup Complete
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
