import { Button, Container } from "react-bootstrap"
import React from "react"

import BackgroundBlock from "../components/background-block"
import ContentBlock from "../components/content-block"
import EmailForm from "../components/email-form"
import Layout from "../components/layout"
import TextImgSection from "../components/text-img-section"
import CallToActionBanner from "../components/call-to-action-banner"

import IntroMDX from "../content/intro"
import Info1MDX from "../content/info1"
import Info2MDX from "../content/info2"
import GentlemansClubMDX from "../content/gentlemans-club"
import RoadmapMDX from "../content/roadmap"
import TeamMDX from "../content/team"

const SECTIONS = [
  { id:"intro",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: IntroMDX, img: "4-small", hColors: ['#FF99CC', '#8FAADC']}
      },
      {
        component: CallToActionBanner,
        attr: {
          id: "buy-on-open-sea",
          className: "blue-bg",
          text: <h2>BUY OUR ALPHA GIRL<br />COLLECTION ON OPEN SEA</h2>,
          cta: <Button href="https://opensea.io/collection/haremsalphaog" variant="primary" enabled><h1>Buy Now</h1></Button>
        }
      }
    ]
  },
  { id:"info1",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: Info1MDX, img: "8-small", hColors: ['#FFFF00', '#FFC000']}
      }
    ]
  },
  { id:"info2",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: Info2MDX, img: "11-small", hColors: ['#FFFF00', '#FFC000']}
      }
    ]
  },
  { id:"gentlemans-club",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: GentlemansClubMDX, img: "24-small", hColors: ['#7030A0', '#FFC000']}
      }
    ]
  },
  { id:"roadmap",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: RoadmapMDX, img: "7-small", hColors: ['#C709C7']}
      }
    ]
  },
  { id:"team",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: TeamMDX, img: "9-small", hColors: ['#FFFF00']}
      }
    ]
  }
]

const HomePage = () => {
  return (
    <Layout dark>
      <BackgroundBlock className="align-items-end d-flex justify-content-center" src="home-bg" minHeight="90vh">
        <CallToActionBanner className="black-bg" left={7} right={4} text={<h1>Get the Latest</h1>} cta={<EmailForm id="top-email-form" hideLabel />} />
      </BackgroundBlock>
      <Container fluid className="black-bg border-top pt-4 text-left">
        {
          SECTIONS.map((section) => {
            return(
              <ContentBlock id={section.id} key={section.id}>
                {
                  section.subSections.map((subSection, i) => {
                    const Section = subSection.component;
                    return <Section key={i} {...subSection.attr} />
                  })
                }
              </ContentBlock>
            )
          })
        }
      </Container>
    </Layout>
  )
}

export default HomePage;
