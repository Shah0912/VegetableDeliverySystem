import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Pickup from "./Pickup";
const Deliver = () => {
  const [pickups, setPickups] = useState([
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
          <Card.Title className="text-center">Pickup Details</Card.Title>
          <ul id="list" className="list">
            {pickups.map(pickup => (
              <Pickup key={pickup.id} pickup={pickup} />
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Deliver;
