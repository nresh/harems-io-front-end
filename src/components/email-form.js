import { Button, Col, Form, Row } from "react-bootstrap"
import React from "react"
import {useState} from 'react'

const EmailForm = ({ id, hideLabel, children }) => {
  const [email, setEmail] = useState("")

  const handleSubmit =  (event) => {
    event.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbxXaWrB_suID2Cs3VoDwDR8hZPOkH6KO1qHEiO2rhyZcAACKe4tG7LIpXW96GAuj1D5/exec"

    const resp = fetch(url, {
      method: 'POST',
      body: JSON.stringify({email: email}),
      }).then(res => { return res.json() })
     .then(res => console.log(res))
     .catch(err => console.log(err))
  }

  return (
    <Form id={id} onSubmit={handleSubmit}>
      <Form.Group className="mb-3 text-lg-left" controlId="formBasicEmail">
        {
          hideLabel || <Form.Label>GET THE LATEST</Form.Label>
        }
        <Row className="pt-3">
          <Col>
            <Form.Control className="d-inline-block w-75" type="email" placeholder="Email Address" onChange={e => setEmail(e.target.value)} />
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
