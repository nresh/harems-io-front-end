import { Button, Col, Row } from "react-bootstrap"
import React from "react"

export default ({ id, children }) => {
  return (
    <Row id={id} className="blue-bg justify-content-center">
      <Col className="my-4 text-center" lg={8} xs="auto">
        <h2>BUY OUR ALPHA GIRL<br />COLLECTION ON OPEN SEA</h2>
      </Col>
      <Col className="my-4 text-center" lg={4} xs="auto">
        <Button href="/" variant="primary" disabled><h1>Coming Soon</h1></Button>
      </Col>
    </Row>
  )
}
