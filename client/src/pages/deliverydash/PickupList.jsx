import React, { useContext, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import Pickup from "./Pickup";
import { PickupContext } from "./DeliveryContext";
const Deliver = () => {
  const { pickups, getPickup } = useContext(PickupContext);
  useEffect(() => {
    getPickup();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card style={{ width: "18rem", display: "flex" }}>
      {console.log(pickups)}
      <Card.Body>
        <Card.Title className="text-center">Pickup Details</Card.Title>
        <ul id="list" className="list">
          {pickups &&
            pickups.map((pickup) => (
              <Pickup key={pickup.orderid} pickup={pickup} />
            ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Deliver;
