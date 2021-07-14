import BackgroundBlock from "../components/background-block"
import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import Layout from "../components/layout"
import React, { useState } from "react"
import styled from "@emotion/styled"

export default () => {

  const Image = styled.img`
    height: auto;
    max-width: 100%;
    padding-bottom: 8px;
    padding-right: 8px;
  `

  return (
    <Layout dark>
      <BackgroundBlock src="home-bg" minHeight="90vh" />
      <Container fluid className="black-bg pt-4 text-left">
        <Row className="justify-content-center pb-4">
          <Col lg={7}>
            <h1 className="pb-4">Welcome to Harems</h1>
            <p>Harems is the next big thing in the NFT space!</p>
          </Col>
          <Col lg={4} className="offset-lg-1">
            <Row>
              <Col><Image src={"ape.png"} /></Col>
              <Col><Image src={"ape.png"} /></Col>
            </Row>
            <Row>
              <Col><Image src={"ape.png"} /></Col>
              <Col><Image src={"ape.png"} /></Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center pb-4">
          <Col lg={7}>
            <h1 className="pb-4">FAIR DISTRIBUTION</h1>
            <p>There are no bonding curves here. Buying a Bored Ape costs 0.08 ETH. There are no price tiers; BAYC membership costs the same for everyone.</p>
          </Col>
          <Col lg={4} className="offset-lg-1">
            <p style={{textStyle: "italic"}}>Note: Thirty apes are being withheld from the sale. These will be used for giveaways, puzzle rewards—and for the creators' BAYC memberships.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
