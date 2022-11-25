import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../Contact.css";

const Contact = () => {

  return (
    <Form className="form" >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Send me a message</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <FloatingLabel controlId="floatingTextarea" className="mb-3">
        Comment
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
        <Button variant="primary" type="submit" className="button">
          Submit
        </Button>
      </FloatingLabel>
    </Form>
    
  );
};

export default Contact;
