import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Expense from "./Expense";
import List from "./List";

const Checkout = () => {
  return (
    <div>
      <Container
        md="30"
        className="mt-5 rounded"
        style={{ background: "#fcfcfc" }}
      >
        <Row>
          <Col>
            <List />
          </Col>
          <Col md="auto">
            <Expense />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
