import React, { useContext, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import Delivery from "./Delivery";
import { DeliveryContext } from "./DeliveryContext";
const Deliver = () => {
  const { deliveries, getDeliveries } = useContext(DeliveryContext);
  useEffect(() => {
    getDeliveries();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card style={{ width: "auto", display: "flex" }}>
      <Card.Body>
        <Card.Title className="text-center">Delivery Details</Card.Title>
        <ul id="list" className="list">
          {deliveries &&
            deliveries.map((delivery) => (
              <Delivery key={delivery.id} delivery={delivery} />
            ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Deliver;
