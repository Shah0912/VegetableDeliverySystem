import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Delivery from "./Delivery";
const Deliver = () => {
  const [deliveries, setDeliveries] = useState([
    {
      id: 1,
      name: "Potato"
    },
    {
      id: 2,
      name: "Onion"
    },
    {
      id: 3,
      name: "Tomato"
    },
    {
      id: 4,
      name: "Cabbage"
    }
  ]);
  return (
    <Container>
      <Card style={{ width: "18rem", display: "flex" }}>
        <Card.Body>
          <Card.Title className="text-center">Delivery Details</Card.Title>
          <ul id="list" className="list">
            {deliveries.map(delivery => (
              <Delivery key={delivery.id} delivery={delivery} />
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Deliver;
