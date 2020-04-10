import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import Pickup from "./Pickup";
import { PickupContext } from "./DeliveryContext";
const Deliver = () => {
  const { pickups } = useContext(PickupContext);
  return (
    <Card style={{ width: "18rem", display: "flex" }}>
      <Card.Body>
        <Card.Title className="text-center">Pickup Details</Card.Title>
        <ul id="list" className="list">
          {pickups.map((pickup) => (
            <Pickup key={pickup.id} pickup={pickup} />
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Deliver;
