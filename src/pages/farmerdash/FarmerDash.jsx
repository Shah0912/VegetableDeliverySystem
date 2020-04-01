import React from "react";
import CropsList from "./CropsList";
import StorageList from "./StorageList";
import OrderList from "./OrderList";
import Feedback from "./Feedback";
import {
  CultivationProvider,
  StorageProvider,
  OrderProvider
} from "./FarmerContext";

import "./DeliveryDash.css";
import { Container, Row, Col } from "react-bootstrap";

export const FarmerDash = () => {
  return (
    <Container className="mt-5">
      <Row>
        <CultivationProvider>
          <Col>
            <CropsList />
          </Col>
        </CultivationProvider>
        <StorageProvider>
          <Col>
            <StorageList />
          </Col>
        </StorageProvider>
        <OrderProvider>
          <Col>
            <OrderList />
          </Col>
        </OrderProvider>
      </Row>
      <Row>
        <Col md="4">
          <Feedback />
        </Col>
      </Row>
    </Container>
  );
};
