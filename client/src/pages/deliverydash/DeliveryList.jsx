import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import Delivery from "./Delivery";
import { DeliveryContext } from "./DeliveryContext";
const Deliver = () => {
  const [deliveries, setDeliveries] = useContext(DeliveryContext);
  return (
    <Card style={{ width: "auto", display: "flex" }}>
      <Card.Body>
        <Card.Title className="text-center">Delivery Details</Card.Title>
        <ul id="list" className="list">
          {deliveries.map(delivery => (
            <Delivery key={delivery.id} delivery={delivery} />
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Deliver;
