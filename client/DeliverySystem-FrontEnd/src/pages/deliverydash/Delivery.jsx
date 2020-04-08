import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Delivery({ delivery }) {
  const [lgShow, setLgShow] = useState(false);
  const info = () => {};
  return (
    <div>
      <li className="li-item" onClick={() => setLgShow(true)}>
        {delivery.name}
        <button className="delete-btn" onClick={() => setLgShow(true)}>
          +
        </button>
      </li>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {delivery.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  );
}
