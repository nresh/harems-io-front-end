import { Col, Row } from "react-bootstrap"
import React from "react"

export default ({ id, className, left, right, text, cta, children }) => {
  return (
    <Row id={id} className={`align-items-center justify-content-center w-100 ${className || ''}`}>
      <Col className="my-4 text-center" lg={left || 8} xs="auto">
        {text}
      </Col>
      <Col className="mb-4 mt-md-4 text-center" lg={right || 4} xs="auto">
        {cta}
      </Col>
    </Row>
  )
}
