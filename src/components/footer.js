import { Col, Container, Row } from "react-bootstrap"
import React from "react"
import styled from "@emotion/styled"

export default ({ children }) => {
  const ContactLink = styled.a`
    color: #ffffff;
    &:hover {
      color: rgba(255,255,255,.75);
      text-decoration: none;
    }
  `

  const Logo = styled.img`
    max-width: 160px;
  `

  return (
      <Container fluid="sm">
        <Row className="justify-content-end">
          <Col className="my-4" lg={4} xs="auto">
            Get on the list
          </Col>
          <Col className="my-4" lg={4} xs="auto">
            <Logo src={"header-logo.svg"} alt="Harems logo"/>
          </Col>
          <Col className="my-4" lg={4} xs="auto">
            &#169; HaremsIO 2021
          </Col>
        </Row>
      </Container>
  )
}
