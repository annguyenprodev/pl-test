import React from "react";
import { Button, Modal } from "react-bootstrap";
import classes from "../style/Modal.module.css";
const Contact = ({ contact, showContactDetail, onCloseContact }) => {
  return (
    <Modal
      show={showContactDetail}
      size="lg"
      backdrop="static"
      centered
      onHide={onCloseContact}
    >
      <Modal.Header>
        <Modal.Title>Contact Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>
            <strong>id:</strong>
            {contact.id}
          </p>
          <p>
            <strong>Full name:</strong> {contact.first_name} {contact.last_name}
          </p>
          <p>
            <strong>email:</strong> {contact.email}
          </p>
          <p>
            <strong>Phone number:</strong>
            {contact.phone_number}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button
          variant="secondary"
          className={classes.ButtonC}
          onClick={onCloseContact}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Contact;
