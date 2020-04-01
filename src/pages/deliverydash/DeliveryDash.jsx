import React from "react";
import Vehicle from "./Vehicle";
import DeliveryList from "./DeliveryList";
import PickupList from "./PickupList";
import { DeliveryProvider } from "./DeliveryContext";

import "./DeliveryDash.css";
import { Container, Row, Col } from "react-bootstrap";

export const DeliveryDash = () => {
  return (
    <DeliveryProvider>
      <Container className="mt-5">
        <Row>
          <Col>
            <Vehicle />
          </Col>
          <Col>
            <DeliveryList />
          </Col>
          <Col>
            <PickupList />
          </Col>
        </Row>
      </Container>
    </DeliveryProvider>
  );
};
