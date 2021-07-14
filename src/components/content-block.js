import { Col, Row } from "react-bootstrap"
import React from "react"

export default ({ id, children }) => {

  return (
    <Row id={id} className="border-bottom py-5">
      <Col>
        {children}
      </Col>
    </Row>
  )
}
