import React, { useContext, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import Pickup from "./Pickup";
import { PickupContext } from "./DeliveryContext";
const Deliver = ({ id }) => {
  const { pickups, getPickup } = useContext(PickupContext);
  useEffect(() => {
    getPickup(id);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card
      className="card border-success mb-3"
      style={{ width: "18rem", display: "flex" }}
    >
      {console.log(pickups)}
      <Card.Body>
        <Card.Title className="text-center">Pickup Details</Card.Title>
        <ul id="list" className="list">
          {pickups &&
            pickups.map((pickup) => (
              <Pickup key={pickup.orderid} pickup={pickup} id={id} />
            ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Deliver;
