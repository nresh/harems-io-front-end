// import logoImg from "../images/Harems-2.png"
import { Nav, Navbar } from "react-bootstrap"
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
    min-height: 100px;
  `;

  return (
    <DarkBar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/" className="d-contents py-0">
          <Logo
            src={"Harems-2-small.png"}
            className=""
            alt="Harems Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav id="home-nav">
            <UpperLink href="/#buy-on-open-sea">Buy</UpperLink>
            <UpperLink href="/#roadmap">Roadmap</UpperLink>
            <UpperLink href="/#team">Team</UpperLink>
          </Nav>
          <Nav id="social-links" className="ml-5">
            <UpperLink href="/"><i className="fa fa-youtube-play social-icon pr-lg-0"></i></UpperLink>
            <UpperLink href="/"><i className="fa fa-instagram social-icon pr-lg-0"></i></UpperLink>
            <UpperLink href="/"><i className="fa fa-discord-alt social-icon pr-lg-0"></i></UpperLink>
            <UpperLink href="/"><i className="fa fa-twitter social-icon pr-lg-0"></i></UpperLink>
          </Nav>
        </Navbar.Collapse>
    </DarkBar>
  )
}
