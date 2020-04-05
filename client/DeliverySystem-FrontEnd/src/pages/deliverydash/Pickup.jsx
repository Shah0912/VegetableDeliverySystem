import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Pickup({ pickup }) {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <li className="li-item" onClick={() => setLgShow(true)}>
        {pickup.name}{" "}
        <span>
          <button className="delete-btn" onClick={() => setLgShow(true)}>
            +
          </button>
        </span>
      </li>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {pickup.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  );
}
