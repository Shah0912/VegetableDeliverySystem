import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { OrderContext } from "./FarmerContext";
import Order from "./Order";
const StorageList = () => {
  const [orders, setOrders] = useContext(OrderContext);
  return (
    <Container>
      <Card
        style={{
          width: "18rem",
          display: "flex"
        }}
      >
        <Card.Body>
          <Card.Title className="text-center">Orders</Card.Title>
          <ul id="list" className="list">
            {orders.map(order => (
              <Order key={order.id} order={order} />
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StorageList;
