import React, { useState } from "react";
import {
  Card,
  Modal,
  Col,
  Row,
  ListGroup,
  Button,
  Form,
  Container,
} from "react-bootstrap";
const ProductCard = () => {
  const imsrc =
    "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2014/01/potatoes-411975_1280.jpg";
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <Card onClick={() => setLgShow(true)} style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={imsrc} />
        <Card.Body>
          <Card.Title>BATATA</Card.Title>
          <Card.Text>This is a listing for fresh fresh BATATA.</Card.Text>
        </Card.Body>
      </Card>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Product Details
          </Modal.Title>
        </Modal.Header>
        <Container>
          <Modal.Body>
            <Row>
              <Col xs={6} sm={5}>
                <img
                  className="rounded"
                  src={imsrc}
                  style={{
                    display: "block",
                    maxWidth: "300px",
                    maxHeight: "400px",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </Col>
              <Col sm={7}>
                <ListGroup variant="flush">
                  <ListGroup.Item>POTATO</ListGroup.Item>
                  <ListGroup.Item>Price per kg: Rs. 50</ListGroup.Item>
                  <ListGroup.Item>
                    <Form>
                      <Form.Group as={Row}>
                        <Col sm={10}>
                          <Form.Control type="number" placeholder="Quantity" />
                        </Col>
                        <Col sm={10}>
                          <Button variant="success" style={{ width: "50%" }}>
                            Add To Cart
                          </Button>
                        </Col>
                      </Form.Group>
                    </Form>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Modal.Body>
        </Container>
      </Modal>
    </div>
  );
};

export default ProductCard;
