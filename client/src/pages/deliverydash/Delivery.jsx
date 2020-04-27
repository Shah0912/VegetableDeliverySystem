import React, { useState, useContext } from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";
import { DeliveryContext } from "./DeliveryContext";

export default function Delivery({ delivery }) {
  const [lgShow, setLgShow] = useState(false);
  const { isDelivered } = useContext(DeliveryContext);
  const onSubmit = (e) => {
    e.preventDefault();
    isDelivered(delivery);
    //addDelivery(pickup);
    //pickup.isPickedup = true;
    setLgShow(false);
  };
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
            <ListGroup.Item>Delivery id: {delivery.orderid}</ListGroup.Item>
            <ListGroup.Item>
              Delivery Contents: {delivery.cropname}
            </ListGroup.Item>
            <ListGroup.Item>Customer Name: {delivery.cust_name}</ListGroup.Item>
            <ListGroup.Item>
              Delivery Address: {delivery.cust_add}
            </ListGroup.Item>
          </ListGroup>
          <Button
            //disabled={pickup.isPickedup}
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
            disabled={delivery.isDelivered}
            variant="success"
            size="lg"
            onClick={onSubmit}
            style={{ width: "50%", margin: "auto", marginTop: "15px" }}
          >
            Delivery Complete
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
