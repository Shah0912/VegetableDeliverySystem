import React, { useContext, useState } from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";
import { CultivationContext } from "./FarmerContext";
import { StorageContext } from "./FarmerContext";

export default function Crop({ crop }) {
  const [lgShow, setLgShow] = useState(false);
  const { addCrop } = useContext(StorageContext);
  const { moveCrop } = useContext(CultivationContext);
  const onSubmit = (e) => {
    e.preventDefault();
    moveCrop(crop);
    addCrop(crop);
  };

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
            <Button
              className="mt-3"
              style={{ width: "50%", margin: "auto" }}
              variant="info"
              onClick={onSubmit}
            >
              Move to Storage
            </Button>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
}
