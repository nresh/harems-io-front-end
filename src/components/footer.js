import { Button, Col, Container, Form, Row } from "react-bootstrap"
import React from "react"
import styled from "@emotion/styled"

export default ({ children }) => {
  const Logo = styled.img`
    max-width: 160px;
  `

  return (
      <Container fluid="sm">
        <Row className="justify-content-end">
          <Col className="center-content my-4 text-left" lg={4} xs="auto">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>GET THE LATEST</Form.Label>
                <Row className="py-3">
                  <Col>
                    <Form.Control className="d-inline-block w-50" type="email" placeholder="Email Address" />
                    <Button className="p-2 w-30" variant="primary" type="submit">--></Button>
                  </Col>
                </Row>
                <Form.Text className="text-muted">
                  Privacy is good
                </Form.Text>
              </Form.Group>
            </Form>

          </Col>
          <Col className="center-content my-4 text-center" lg={4} xs="auto">
            <Logo src={"header-logo.svg"} alt="Harems logo"/>
          </Col>
          <Col className="center-content my-4 text-center" lg={4} xs="auto">
            &#169; HaremsIO 2021
          </Col>
        </Row>
      </Container>
  )
}
