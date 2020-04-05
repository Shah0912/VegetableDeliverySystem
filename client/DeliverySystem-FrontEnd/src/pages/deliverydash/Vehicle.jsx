import React from "react";
import { Card, Container } from "react-bootstrap";
const Vehicle = () => {
  return (
    <Container>
      <Card style={{ width: "18rem", display: "flex" }}>
        <Card.Body>
          <Card.Title className="text-center">Vehicle Details</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      {/* </div> */}
    </Container>
  );
};

export default Vehicle;
