import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import Pickup from "./Pickup";
import { DeliveryContext } from "./DeliveryContext";
const Deliver = () => {
  const [deliveries, setDeliveries] = useContext(DeliveryContext);
  return (
    <Container>
      <Card style={{ width: "18rem", display: "flex" }}>
        <Card.Body>
          <Card.Title className="text-center">Pickup Details</Card.Title>
          <ul id="list" className="list">
            {deliveries.map(delivery => (
              <Pickup key={delivery.id} delivery={delivery} />
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Deliver;
