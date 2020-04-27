import React from "react";
import { Card, ListGroup } from "react-bootstrap";
const Direction = ({ steps }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>DIRECTIONS</Card.Header>
        <ListGroup variant="flush">
          {steps.map((step) => (
            <ListGroup.Item>{step.maneuver.instruction}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Direction;
