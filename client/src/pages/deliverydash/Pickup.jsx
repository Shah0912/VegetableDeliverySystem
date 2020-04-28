import React, { useContext, useState, useEffect } from "react";
import { Modal, ListGroup, Button, Jumbotron } from "react-bootstrap";
import { PickupContext, DeliveryContext } from "./DeliveryContext";
import Maps from "./Maps";
import { Link } from "react-router-dom";

export default function Pickup({ pickup }) {
  const { isPickedup, map } = useContext(PickupContext);
  // const [location, setLocation] = useContext(PickupContext);
  const { addDelivery } = useContext(DeliveryContext);
  const [lgShow, setLgShow] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    isPickedup(pickup);
    //addDelivery(pickup);
    //pickup.isPickedup = true;
    setLgShow(false);
    window.location.replace();
  };
  return (
    <div>
      {map(pickup.address)}
      <li
        className="li-item"
        onClick={() => setLgShow(true)}
        style={{ textDecoration: pickup.isPickedup ? "line-through" : "" }}
      >
        Pickup Number: {pickup.orderid}{" "}
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
            Pickup Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Pickup id: {pickup.orderid}</ListGroup.Item>
            <ListGroup.Item>
              Delivery Contents: {pickup.cropname}
            </ListGroup.Item>
            <ListGroup.Item>Farmer Name: {pickup.farmername}</ListGroup.Item>
          </ListGroup>
          {/* <Link to="/delivery/maps?address="+pickup.address> */}
          <Button
            disabled={pickup.isPickedup}
            variant="success"
            size="lg"
            href={"/delivery/maps?address=" + pickup.address}
            //onClick={onSubmit}
            style={{
              width: "50%",
              margin: "auto",
              marginTop: "15px",
              paddingRight: "2px",
            }}
          >
            View Map
          </Button>
          {/* </Link> */}
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
