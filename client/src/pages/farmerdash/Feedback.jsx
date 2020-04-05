import React from "react";
import { Button, Modal } from "react-bootstrap";

const Feedback = () => {
  const [lgShow, setLgShow] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setLgShow(true)}>Feedback</Button>;
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </div>
  );
};

export default Feedback;
