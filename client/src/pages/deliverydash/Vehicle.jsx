import React from "react";
import { Card, ListGroup } from "react-bootstrap";
const Vehicle = () => {
  return (
    <Card style={{ width: "18rem", display: "flex" }}>
      <Card.Body>
        <Card.Title className="text-center">Vehicle Details</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Vehicle No.: MH 01 AF 6077 </ListGroup.Item>
          <ListGroup.Item>Type: Tempo</ListGroup.Item>
          <ListGroup.Item>Licence No.: MH034523233</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Vehicle;
