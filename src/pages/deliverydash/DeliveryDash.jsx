import React from "react";
import Vehicle from "./Vehicle";
import DeliveryList from "./DeliveryList";
import PickupList from "./PickupList";
import { DeliveryProvider } from "./DeliveryContext";

import "./DeliveryDash.css";
import { CardDeck, Container } from "react-bootstrap";

export const DeliveryDash = () => {
  return (
    <DeliveryProvider>
      <Container className="mt-5">
        <CardDeck>
          <Vehicle />
          <DeliveryList />
          <PickupList />
        </CardDeck>
      </Container>
    </DeliveryProvider>
  );
};
