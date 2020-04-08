import React from "react";
import CropsList from "./CropsList";
import StorageList from "./StorageList";
import OrderList from "./OrderList";
import Feedback from "./Feedback";
import FarmerNav from "../components/FarmerNav";
import {
  CultivationProvider,
  StorageProvider,
  OrderProvider,
} from "./FarmerContext";

import { Container, Row, Col } from "react-bootstrap";

export const FarmerDash = () => {
  return (
    <React.Fragment>
      <FarmerNav />
      <Container className="mt-5">
        <Row>
          <StorageProvider>
            <CultivationProvider>
              <Col>
                <CropsList />
              </Col>
            </CultivationProvider>

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
      </Container>
    </React.Fragment>
  );
};
