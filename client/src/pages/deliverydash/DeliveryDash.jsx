import React from "react";
import Vehicle from "./Vehicle";
import DeliveryList from "./DeliveryList";
import PickupList from "./PickupList";
import DeliveryNav from "../navbars/DeliveryNav";
import {
  DeliveryProvider,
  PickupProvider,
  VehicleProvider,
} from "./DeliveryContext";
import Map from "./Map";
import querystring from "query-string";

import "./DeliveryDash.css";
import { CardDeck, Container, Card } from "react-bootstrap";

export const DeliveryDash = (props) => {
  const id = querystring.parse(props.location.search).id;
  return (
    <React.Fragment>
      <DeliveryNav id={id} />
      <Container className="mt-5">
        <CardDeck>
          <VehicleProvider>
            <Vehicle id={id} />
          </VehicleProvider>
          <DeliveryProvider>
            <DeliveryList id={id} />
            <PickupProvider>
              <PickupList id={id} />
            </PickupProvider>
          </DeliveryProvider>
        </CardDeck>
      </Container>
    </React.Fragment>
  );
};
