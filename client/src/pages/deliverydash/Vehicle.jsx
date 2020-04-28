import React, { useContext, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { VehicleContext } from "./DeliveryContext";

const Vehicle = ({ id }) => {
  const { vehicle, getDetails } = useContext(VehicleContext);
  useEffect(() => {
    getDetails(id);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card style={{ width: "18rem", display: "flex" }}>
      <Card.Body>
        <Card.Title className="text-center">Vehicle Details</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Vehicle No.: {vehicle.vehicleno} </ListGroup.Item>
          <ListGroup.Item>Type: {vehicle.type}</ListGroup.Item>
          <ListGroup.Item>Licence No.: {vehicle.licence_number}</ListGroup.Item>
          <ListGroup.Item>Capacity.: {vehicle.volume_capacity}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Vehicle;
