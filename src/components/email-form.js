import { Button, Col, Form, Row } from "react-bootstrap"
import React from "react"

const EmailForm = ({ id, hideLabel, children }) => {
  return (
    <Form id={id}>
      <Form.Group className="mb-3 text-lg-left" controlId="formBasicEmail">
        {
          hideLabel || <Form.Label>GET THE LATEST</Form.Label>
        }
        <Row className="pt-3">
          <Col>
            <Form.Control className="d-inline-block w-75" type="email" placeholder="Email Address" />
            <Button className="bg-dark p-2 w-30" variant="primary" type="submit">&rarr;</Button>
          </Col>
        </Row>
        <Form.Text className="text-muted">
          We keep your email private.
        </Form.Text>
      </Form.Group>
    </Form>
  )
}

export default EmailForm;
