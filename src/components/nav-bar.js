import { Col, Container, Nav, Navbar, Row} from "react-bootstrap"
// import logoImg from "..//logo.svg"
import React from "react"
import styled from "@emotion/styled"

export default () => {
  const Logo = styled.img`
    height: 45px;
  `;

  const UpperLink = styled(Nav.Link)`
    font-weight: 500;
    text-transform: uppercase;
    white-space: nowrap;
  `;

  const DarkBar = styled(Navbar)`
    background-color: black;
    /* display: flex; */
    height: 100px;
  `;

  return (
    <DarkBar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/" className="d-contents py-0">
          <Logo
            src={"header-logo.svg"}
            className=""
            alt="Harems IO Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <UpperLink href="/">Home</UpperLink>
            <UpperLink href="/buy">Buy</UpperLink>
            <UpperLink href="/roadmap">Roadmap</UpperLink>
            <UpperLink href="/team">Team</UpperLink>
          </Nav>
        </Navbar.Collapse>
    </DarkBar>
  )
}
