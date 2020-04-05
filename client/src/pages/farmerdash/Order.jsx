import React, { useState } from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";

export default function Order({ order }) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <li className="li-item" onClick={() => setLgShow(true)}>
        Order No. {order.id}
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
            Order No. {order.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Order Contents:{" "}
              {order.content.map(item => (
                <li>
                  {item.name} {item.quantity}
                </li>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              Delivery Person Name: {order.del_name}
            </ListGroup.Item>
            <ListGroup.Item>Total Cost: {order.total_cost}</ListGroup.Item>
          </ListGroup>
          <Button variant="success" size="lg">
            Order Ready
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
