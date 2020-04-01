import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

const AddCrop = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <Button variant="success" onClick={() => setLgShow(true)}>
        New Crop
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">New Crop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Crop Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Rate
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="number" placeholder="Rate" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Type
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Type" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Season
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Season" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Farm Age
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Farm Age" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Farm Size
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Farm Size" />
              </Col>
            </Form.Group>
            <Button variant="success" onClick={() => setLgShow(true)}>
              Add Crop
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddCrop;
