import React from "react";
import Vehicle from "./Vehicle";
import DeliveryList from "./DeliveryList";
import PickupList from "./PickupList";
import DeliveryNav from "../navbars/DeliveryNav";
import { DeliveryProvider, PickupProvider } from "./DeliveryContext";
import Map from "./Map";

import "./DeliveryDash.css";
import { CardDeck, Container, Card } from "react-bootstrap";

export const DeliveryDash = () => {
  return (
    <React.Fragment>
      <DeliveryNav />
      <Container className="mt-5">
        <CardDeck>
          <Vehicle />
          <DeliveryProvider>
            <DeliveryList />
            <PickupProvider>
              <PickupList />
            </PickupProvider>
          </DeliveryProvider>
        </CardDeck>
      </Container>
    </React.Fragment>
  );
};
