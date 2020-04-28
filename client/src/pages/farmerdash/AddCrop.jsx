import React, { useState, useContext } from "react";
import { CultivationContext } from "./FarmerContext";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

const AddCrop = ({ id }) => {
  const [lgShow, setLgShow] = useState(false);
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  const [type, setType] = useState("");
  const [season, setSeason] = useState("");
  const [farmage, setFarm_age] = useState(0);
  const [farmsize, setFarm_size] = useState(0);
  const { addCrop } = useContext(CultivationContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newCrop = {
      farmerid: id, //F104 //Math.floor(Math.random() * 100000000),
      name,
      rate,
      type,
      season,
      farmage,
      farmsize,
    };
    addCrop(newCrop);
  };

  return (
    <div>
      <Button
        variant="success"
        style={{ width: "100%" }}
        onClick={() => setLgShow(true)}
      >
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
          <Form /* onSubmit={onSubmit} */>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Crop Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={name}
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Rate
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={rate}
                  type="number"
                  placeholder="Rate"
                  onChange={(e) => setRate(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Type
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={type}
                  type="text"
                  placeholder="Type"
                  onChange={(e) => setType(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Season
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={season}
                  type="text"
                  placeholder="Season"
                  onChange={(e) => setSeason(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Farm Age
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={farmage}
                  type="number"
                  placeholder="Farm Age"
                  onChange={(e) => setFarm_age(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Farm Size
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={farmsize}
                  type="number"
                  placeholder="Farm Size"
                  onChange={(e) => setFarm_size(e.target.value)}
                />
              </Col>
              <Button
                className="mt-3"
                variant="success"
                style={{ width: "50%", margin: "auto" }}
                onClick={onSubmit}
              >
                Add Crop
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddCrop;
