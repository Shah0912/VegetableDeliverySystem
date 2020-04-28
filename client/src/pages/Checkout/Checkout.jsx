import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Expense from "./Expense";
import List from "./List";
import CustomerNav from "../navbars/CustomerNav";
import querystring from "query-string";

const Checkout = (props) => {
  const id = querystring.parse(props.location.search).id;
  return (
    <div>
      <CustomerNav id={id} />
      <Container
        md="30"
        className="mt-5 rounded"
        style={{ background: "#fcfcfc" }}
      >
        <Row>
          <Col>
            <List id={id} />
          </Col>
          <Col md="auto">
            <Expense id={id} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
