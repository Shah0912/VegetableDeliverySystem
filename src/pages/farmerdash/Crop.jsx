import React, { useState } from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";

export default function Crop({ crop }) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <li className="li-item" onClick={() => setLgShow(true)}>
        {crop.name}
        <button className="delete-btn">+</button>
      </li>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {crop.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {crop.name}</ListGroup.Item>
            <ListGroup.Item>Rate: {crop.rate}</ListGroup.Item>
            <ListGroup.Item>Type: {crop.type}</ListGroup.Item>
            <ListGroup.Item>Season: {crop.season}</ListGroup.Item>
            <ListGroup.Item>Farm age: {crop.farm_age}</ListGroup.Item>
            <ListGroup.Item>Farm size: {crop.farm_size}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
}
