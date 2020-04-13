import React, { useState, useContext } from "react";
import { CartContext } from "./ProductContext";
import {
  Card,
  Modal,
  Col,
  Row,
  ListGroup,
  Button,
  Form,
  Container,
  Toast,
} from "react-bootstrap";

const ProductCard = ({ product }) => {
  const [show, setShow] = useState(false);
  const { addToCart } = useContext(CartContext);
  const onSubmit = (e) => {
    e.preventDefault();
    addToCart(product);
    setShow(true);
  };
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <Card onClick={() => setLgShow(true)} style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Freshly grown {product.name}</Card.Text>
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
                  src={product.image}
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
                  <ListGroup.Item>{product.name}</ListGroup.Item>
                  <ListGroup.Item>Price per kg: {product.price}</ListGroup.Item>
                  <ListGroup.Item>
                    <Form>
                      <Form.Group as={Row}>
                        <Col sm={10} style={{ margin: "auto" }}>
                          <Form.Control
                            type="number"
                            placeholder="Quantity"
                            onChange={(e) => {
                              product.quantity = e.target.value;
                            }}
                          />
                        </Col>
                        <Col sm={10} style={{ width: "50%", margin: "auto" }}>
                          <Button
                            className="mt-2"
                            variant="success"
                            onClick={onSubmit}
                          >
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
