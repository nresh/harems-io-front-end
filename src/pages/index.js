import BackgroundBlock from "../components/background-block"
import ContentBlock from "../components/content-block"
import { Button, Col, Container, Row } from "react-bootstrap"
import IntroMDX from "../content/intro"
import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"
import TextImgSection from "../components/text-img-section"
import CallToActionBanner from "../components/call-to-action-banner"
import styled from "@emotion/styled"


const SECTIONS = [
  { id:"intro",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: IntroMDX, img: "4.jpg", hColors: ['#FF99CC', '#8FAADC']}
      },
      {
        component: CallToActionBanner, attr: {}
      }
    ]
  }
]

export default () => {

  const Image = styled.img`
    height: auto;
    max-width: 100%;
  `

  const ImgBoxWithText = ({img, text}) => {
    return(
      <Col md={2} className="mb-2">
        <Row>
          <Col xs={3} sm={3} md={12}>
            <Image src={img} />
          </Col>
          <Col xs={8} sm={8} md={12} className="align-items-center d-flex justify-content-md-center">
            <p className=" text-md-center">{text}</p>
          </Col>
        </Row>
      </Col>
    )
  }

  const ProgressItem = ({pct, desc}) => {
    return (
      <Row>
        <Col lg={1}>{pct}</Col>
        <Col lg={10}>{desc}</Col>
      </Row>
    )
  }

  return (
    <Layout dark>
      <BackgroundBlock src="home-bg" minHeight="90vh" />
      <StyledContainer fluid className="black-bg pt-4 text-left">
        {
          SECTIONS.map((section) => {
            return(
              <ContentBlock id={section.id} key={section.id}>
                {
                  section.subSections.map((subSection) => {
                    const Section = subSection.component;
                    return <Section {...subSection.attr} />
                  })
                }
              </ContentBlock>
            )
          })
        }
        <ContentBlock id="specs">
          <Row className="justify-content-center pb-4">
            <Col lg={7}>
              <h1>Specs</h1>
              <p>This is how it works...</p>
              <p>We use ERC tokens blah blah...</p>
              <p>Member only area can be found in <Link to="/">here</Link></p>
            </Col>
            <Col lg={4} className="offset-lg-1">
              <Image src={"ape.png"} />
            </Col>
          </Row>
        </ContentBlock>
        <ContentBlock id="welcome">
          <Row className="justify-content-center pb-4">
            <Col>
            <h1>Welcome</h1>
            <p>When you buy harems..</p>
            </Col>
          </Row>
          <Row className="justify-content-center pb-4 text-center text-small">
            <ImgBoxWithText img="ape.png" text="unmatched!" />
            <ImgBoxWithText img="ape.png" text="unique!" />
            <ImgBoxWithText img="ape.png" text="rare!" />
            <ImgBoxWithText img="ape.png" text="valuable!" />
            <ImgBoxWithText img="ape.png" text="invaluable!" />
          </Row>
        </ContentBlock>
        <ContentBlock id="bathroom">
          <Row className="justify-content-center pb-4">
            <Col lg={9}>
              <h1>Bathroom</h1>
              <p>Do your business</p>
              <p>...and paint</p>
            </Col>
            <Col lg={3} >
              <Image src={"ape.png"} />
            </Col>
          </Row>
        </ContentBlock>
        <ContentBlock id="roadmap">
          <Row className="pb-4">
            <Col>
              <h1>Roadmap</h1>
              <p>lots to dooo</p>
            </Col>
          </Row>
          <Row className="pb-4">
            <Col lg={8}>
              <ProgressItem pct="20%" desc="did something" />
              <ProgressItem pct="40%" desc="did more" />
              <ProgressItem pct="60%" desc="did something impressive" />
              <ProgressItem pct="80%" desc="almost done" />
              <ProgressItem pct="20%" desc="done" />
            </Col>
            <Col lg={3} className="offset-lg-1" >
              <Image src={"ape.png"} />
            </Col>
          </Row>
        </ContentBlock>
        <ContentBlock id="tools">
          <Row className="justify-content-center pb-4">
            <Col lg={8}>
              <h1>Tools</h1>
              <p>Some helpful stuff...</p>
            </Col>
            <Col lg={3} className="m-lg-auto offset-lg-1" >
              <Row className="d-flex">
                <Col lg={12} md={6} sm={12} className="mb-3">
                  <Button href="/" variant="primary">External Site 1</Button>
                </Col>
                <Col lg={12} md={6} sm={12}>
                  <Button href="/" variant="primary">External Site 2</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </ContentBlock>
        <ContentBlock id="team">
          <Row className="justify-content-center pb-4">
            <Col lg={7}>
              <h1>The Team</h1>
              <p>We are awesome</p>
              <p>...and interesting</p>
            </Col>
            <Col lg={4} className="offset-lg-1">
              <Row>
                <Col className="pb-2 pr-2"><Image src={"ape.png"} /></Col>
                <Col className="pb-2 pl-2"><Image src={"ape.png"} /></Col>
              </Row>
              <Row>
                <Col className="pt-2 pr-2"><Image src={"ape.png"} /></Col>
                <Col className="pt-2 pl-2"><Image src={"ape.png"} /></Col>
              </Row>
            </Col>
          </Row>
          <Row >
            <Col>
              <p className="bold-text text-center">VERIFIED SMART CONTRACT ADDRESS: <Link to="/">0x010101001001001010202</Link></p>
            </Col>
          </Row>
        </ContentBlock>
      </StyledContainer>
    </Layout>
  )
}

const StyledContainer = styled(Container)`
  /* .content-block:nth-child(1n) {
    h1:nth-of-type(1){color: #FF99CC}
    h1:nth-of-type(2){color: #8FAADC}
  } */
  /* .content-block:nth-child(2n) {
    h1 {color: #FFFF00}
  }
  .content-block:nth-child(3n) {
    h1 {color: #FFC000}
  }
  .content-block:nth-child(4n) {
    h1 {color: #00B0F0}
  }
  .content-block:nth-child(5n) {
    h1 {color: #00B050}
  }
  .content-block:nth-child(6n) {
    .sub-block:nth-child(1) {h1 {color: #7030A0}}
    .sub-block:nth-child(2) {h1 {color: #8FAADC}}
  }
  .content-block:nth-child(7n) {
    h1 {color: #C709C7}
  } */

`
