import React, { useContext, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { OrderContext } from "./FarmerContext";
import Order from "./Order";
const StorageList = ({ id }) => {
  const { orders, getOrders } = useContext(OrderContext);
  useEffect(() => {
    getOrders(id);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Card
        className="card border-success mb-3"
        style={{
          width: "18rem",
          display: "flex",
        }}
      >
        <Card.Body>
          <Card.Title className="text-center">Orders</Card.Title>
          <ul id="list" className="list">
            {orders.map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StorageList;
