import { Container } from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"

import BackgroundBlock from "../components/background-block"
import ContentBlock from "../components/content-block"
import Layout from "../components/layout"
import TextImgSection from "../components/text-img-section"
import CallToActionBanner from "../components/call-to-action-banner"

import IntroMDX from "../content/intro"
import Info1MDX from "../content/info1"
import Info2MDX from "../content/info2"
import Info3MDX from "../content/info3"
import GentlemansClubMDX from "../content/gentlemans-club"
import RoadmapMDX from "../content/roadmap"
import TeamMDX from "../content/team"

import styled from "@emotion/styled"


const SECTIONS = [
  { id:"intro",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: IntroMDX, img: "4.jpg", hColors: ['#FF99CC', '#8FAADC']}
      },
      {
        component: CallToActionBanner, attr: {id:"buy-on-open-sea"}
      }
    ]
  },
  { id:"info1",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: Info1MDX, img: "8.jpg", hColors: ['#FFFF00', '#FFC000']}
      }
    ]
  },
  { id:"info2",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: Info2MDX, img: "11.jpg", hColors: ['#FFFF00', '#FFC000']}
      }
    ]
  },
  { id:"info3",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: Info3MDX, img: "rare-harem.jpg", hColors: ['#00B050']}
      }
    ]
  },
  { id:"gentlemans-club",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: GentlemansClubMDX, img: "4.jpg", hColors: ['#7030A0', '#FFC000']}
      }
    ]
  },
  { id:"roadmap",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: RoadmapMDX, img: "7.jpg", hColors: ['#C709C7']}
      }
    ]
  },
  ,
  { id:"team",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: TeamMDX, img: "9.jpg", hColors: ['#FFFF00']}
      }
    ]
  }
]

export default () => {
  return (
    <Layout dark>
      <BackgroundBlock src="home-bg" minHeight="90vh" />
      <Container fluid className="black-bg pt-4 text-left">
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
      </Container>
    </Layout>
  )
}
