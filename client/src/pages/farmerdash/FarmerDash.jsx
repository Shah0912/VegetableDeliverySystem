import React from "react";
import CropsList from "./CropsList";
import StorageList from "./StorageList";
import OrderList from "./OrderList";
import Feedback from "./Feedback";
import FarmerNav from "../navbars/FarmerNav";
import {
  CultivationProvider,
  StorageProvider,
  OrderProvider,
} from "./FarmerContext";

import { Container, Row, Col } from "react-bootstrap";
import querystring from "query-string";

export const FarmerDash = (props) => {
  const id = querystring.parse(props.location.search).id;
  return (
    <React.Fragment>
      <FarmerNav id={id} />
      <Container className="mt-5">
        <Row>
          <StorageProvider>
            <CultivationProvider>
              <Col>
                <CropsList id={id} />
              </Col>
            </CultivationProvider>

            <Col>
              <StorageList id={id} />
            </Col>
          </StorageProvider>
          <OrderProvider>
            <Col>
              <OrderList id={id} />
            </Col>
          </OrderProvider>
        </Row>
      </Container>
    </React.Fragment>
  );
};
